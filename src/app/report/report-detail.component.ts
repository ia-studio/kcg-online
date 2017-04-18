/* *
* ref: https://github.com/jkuri/ng2-uploader
* */
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from "@angular/core/src/metadata/di";
import { Subscription } from "rxjs";

import { CaseType, SubCaseType } from '../shared/case';
import { ReportService, RecaptchaCode } from './report.service';
import { GeoAddressService } from './geoAddress.service';
import { GeolocationService } from './geoLocation.service';
import { UploadService } from './upload.service';
import { AreaService } from './area.service';

import {
  DistrictCodesKaohsiung, RegionCodesKaohsiung, CountyCodes, District, County, Region,
  validateEmail,
  checkFilesSize, checkTotalFilesSize, checkFileName, checkExtName, checkFilenameIsExist, joinUploadedFileName,
  genCaseToken,
  Md5
} from './modules';

@Component({
  selector: 'app-report-detail',
  templateUrl: 'report-detail.component.html',
  providers: [ReportService, GeoAddressService, GeolocationService, UploadService, AreaService],
  styleUrls: ['report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit, OnDestroy {
  error: any;
  navigated = false; // true if navigated here
  getReportDone = false;
  reportAttention = true;
  areaCodes: District[]; // 左側檢舉址 地區 gps
  districtCodes: District[]; // 右側行政區 下拉項目
  hasher: string; //caseType, subCaseType 的密鑰，避免篡改
  countyCodes: County[]; // 右側基本資料 地址 縣市別
  regionCodes: Region[]; // 右側基本資料 地址 里別
  recaptchaCode: RecaptchaCode;
  recaptchaImg: string;
  validateTime = 9*60*1000;

  readonly placeholder: string = '輸入所在地址';
  coords: any;
  // gpsFormattedAddress: string;
  gpsDistrict: string;

  readonly county_placeholder: string = '縣市';
  readonly district_placeholder: string = '地區';
  readonly region_placeholder: string = '里別';
  readonly addr4_placeholder: string = '居住地址';

  private subscribes: Subscription[] = []; // put all subscribes into this array, while component ondestroy to unsubscribe them.

  Subj_District_name: string = this.district_placeholder;
  Sugg_Addr1_name: string = this.county_placeholder;
  Sugg_Addr2_name: string = this.district_placeholder;
  Sugg_Addr3_name: string = this.region_placeholder;

  //form settings
  Subj_Item: string;
  Subj_Subitem: string;
  Subj_District: string;
  Subj_Security: string;
  Subj_Content: string;
  Subj_FileCount: number;
  Atth_FileNames: string;
  Case_Token: string;
  Sugg_Name: string;
  Sugg_Telno: string;
  Sugg_Email: string;
  Sugg_Addr1: string;
  Sugg_Addr2: string;
  Sugg_Addr3: string;
  Sugg_Addr4: string;
  Sugg_Sex: string;
  Input_ValidationCode: string;

  uploadFiles: File[] = [];

  @Input() caseType: CaseType;
  @Input() subCaseType: SubCaseType;
  @Output() closeReport = new EventEmitter();

  constructor(
    private geoLocationService: GeolocationService,
    private geoAddressService: GeoAddressService,
    private uploadService: UploadService,
    private areaService: AreaService,
    private reportService: ReportService

  ) {
    this.Case_Token = genCaseToken(12);
    this.areaCodes = DistrictCodesKaohsiung(true); // 左側行政區 gps
    this.districtCodes = []; // 右側行政區下拉項目
    this.gpsDistrict = '';
    this.Subj_District = ''; // default
    this.countyCodes = CountyCodes();
    this.regionCodes = [];
    this.Input_ValidationCode = "";
    this.Subj_FileCount = 0;
    this.Atth_FileNames = '';
    this.Subj_Security = '2'; // 保密等級，always 預設為保密 2
    this.Sugg_Sex = '3'; // 性別，預設為其他 3
  }

  getValidation() {
    this.reportService
      .getValidationCode()
      .subscribe(recaptcha => {
       this.recaptchaCode = recaptcha,
       this.recaptchaImg = "data:image/gif;base64,"+ recaptcha.ValidationCode; });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.Subj_Item = this.caseType.Item;
    this.Subj_Subitem = this.subCaseType.Subitem;
    this.hasher = Md5(this.genHasherMajorKey());
    this.getValidation();
    setInterval(() => { this.getValidation(); }, this.validateTime);
  }

  goBack(directlyRedirect?: boolean){
    let emit = this.closeReport.emit();
    if (directlyRedirect === true){
      emit;
    }
    else{
      if(confirm('確定取消申報?')) {
        this.closeReport.emit();
      }
    }
  }

  private genHasherMajorKey(): string{
    return `${this.Subj_Subitem}-${this.Case_Token}-${this.Subj_Item}`
  }

  ngOnDestroy() {
    this.subscribes.forEach(s => s.unsubscribe());
  }

  private getLocation(){
    let opt = {
      enableHighAccuracy : true,
      timeout : 5000,
      maximumAge : 0
    };
    this.subscribes.push(
      this.geoLocationService.getLocation(opt).subscribe(
        data => {
          //console.log(data.coords);
          this.coords = data.coords;
          this.getAddressData(data.coords.latitude, data.coords.longitude);
        }
      )
    );
  }

  private getAddressData(lat, lng){
    this.subscribes.push(
      this.geoAddressService.getAddressResult(lat, lng).subscribe(
        data => {
          if (data.results[0] !== null && data.results[0].formatted_address !== null) {
            let addr = data.results[0].formatted_address;
            // this.gpsFormattedAddress = addr; // 檢舉地址
            this.gpsDistrict = addr.substring(addr.indexOf('市') + 1, addr.indexOf('區') + 1);
            this.Subj_District_name = this.gpsDistrict;
            this.adjustGpsResolving(this.gpsDistrict);
          }
        }
      )
    );
  }

  private adjustGpsResolving(gpsDistrict: string){
    this.areaCodes.filter((data) => {
      if (data.DistrictName === gpsDistrict){
        this.Subj_District = data.DistrictCode;
      }
    });
  }

  @ViewChild("fileInput") fileInput: any;
  addFile(): void {
    let fi: any = this.fileInput.nativeElement;
    if (fi.files) {
      //console.log(fi.files);

      let refiles = checkFilenameIsExist(fi.files, this.uploadFiles);
      if (!refiles || refiles.length <= 0)
        return;

      let check = this.checkFiles(refiles);
      if (!check)
        return;

      for(let i=0; i < refiles.length; i++){
        this.uploadFiles.push(refiles[i]);
      }

      let upurl: string = `/webapi/api/AttachFile/Upload/${this.Case_Token}`;
      this.subscribes.push(
        this.uploadService.sendFileRequest(upurl, refiles).subscribe(
          resp => {
            console.log(resp);
          }
        )
      );
    }
  }
  private checkFiles(files: File[]): boolean {
    let r0 = checkTotalFilesSize(files);
    if (!r0)
      return false;

    for(let i=0; i<files.length; i++){
      let f = files[i];
      let r1 = checkFilesSize(f);
      if (!r1)
        return false;

      let r2 = checkFileName(f);
      if (!r2)
        return false;

      let r3 = checkExtName(f);
      if (!r3)
        return false;
    }
    return true;
  }

  onSubmitClick(): boolean{
    // 檢查資料、收集資料
    let hidden_hasher = Md5(`${this.Subj_Subitem}-${this.Case_Token}-${this.Subj_Item}`);
    var checkList = [];
    if (hidden_hasher !== this.hasher){

      checkList.push('主項目或子項目不符合\n-\n'); //此項錯誤，表示主/子項目/CaseToken 的 hidden 內容遭篡改!!

    }

    if (!this.Subj_District) {
      checkList.push('請選擇檢舉地址區域\n-\n');
      //console.log(`Subj_District: ${this.Subj_District}`);

    }

    //console.log(`Subj_Security: ${this.Subj_Security}`);

    if (!this.Subj_Content || this.Subj_Content.length === 0) {
      checkList.push('請填寫建議事項\n-\n');
    }

    // 處理上傳內容
    this.Subj_FileCount = this.uploadFiles.length;
    this.Atth_FileNames = joinUploadedFileName(this.uploadFiles);

    // 上傳附件的資料可能有誤，basically, this will not happen
    if ((this.Subj_FileCount && this.Subj_FileCount > 0) && (!this.Atth_FileNames || this.Atth_FileNames.split(';').length === 0)){
      //console.log(`Subj_FileCount: ${this.Subj_FileCount}\nAtth_FileNames: ${this.Atth_FileNames}`);
      checkList.push('請重新上傳附件\n-\n');

    }

    // case toekn check
    if (!this.Case_Token || this.Case_Token.length <= 0){
      //console.log(`Case_Token: ${this.Case_Token}`);
      checkList.push('個案標識資料異常\n-\n');

    }

    if (!this.Sugg_Name || this.Sugg_Name.length < 2){
      //console.log(`Sugg_Name: ${this.Sugg_Name}`);
      checkList.push('請填寫基本資料姓名\n-\n');
    }

    let phoneExp = /^([0-9]|\*|\#|\(|\)|\-|\s){7,20}$/;
    if (!this.Sugg_Telno || this.Sugg_Telno.search(phoneExp) === -1){
      //console.log(`Sugg_Telno: ${this.Sugg_Telno}`);
      if(!this.Sugg_Telno){
        checkList.push('請填寫基本資料電話\n-\n');
      } else {
        checkList.push('格式有誤。\n僅接受以下字元*#()- 0-9 等半形字元\n-\n');
      }

    }

    if (!this.Sugg_Email){
      //console.log(`Sugg_Email: ${this.Sugg_Email}`);
      checkList.push('請填寫基本資料 Email\n-\n');

    }
    if (!validateEmail(this.Sugg_Email)){
      checkList.push('基本資料 Email 格式有誤。\n正確格式為 example@example.com\n-\n');

    }

    // 地址1-4
    let value_addr1 = this.Sugg_Addr1;
    //console.log(`Sugg_Addr1: ${this.Sugg_Addr1}`);
    if (!value_addr1 || value_addr1.length === 0){
      this.Sugg_Addr1 = '';
      checkList.push('基本資料「縣市」為必填\n-\n');

    }
    let value_addr2 = this.Sugg_Addr2;
    //console.log(`Sugg_Addr2: ${this.Sugg_Addr2}`);
    if (!value_addr2 || value_addr2.length === 0){
      this.Sugg_Addr2 = '';
      checkList.push('基本資料「行政區域」為必填\n-\n');

    }
    // 里別，非必填
    let value_addr3 = this.Sugg_Addr3;
    if (!value_addr3){
      this.Sugg_Addr3 = '';
    }
    // 確認 行政區、里別 關聯性，錯誤則無法上傳，引發 api 400 error
    //this.Sugg_Addr2 = this.Sugg_Addr3.substring(0, this.Sugg_Addr3.length - 2) + '00';

    // 確認 縣市、行政區、里別 關聯性。可能不太準確，但可以有基本防護
    let county_code_starts3 = this.Sugg_Addr1.substring(0, 3);
    //console.log(`county_code_starts3: ${county_code_starts3}`);
    if (this.Sugg_Addr2 && this.Sugg_Addr2.length > 0 && this.Sugg_Addr2.substring(0, 3) !== county_code_starts3
        || (this.Sugg_Addr3 && this.Sugg_Addr3.length > 0 && this.Sugg_Addr3.substring(0, 3) !== county_code_starts3)){

      checkList.push('行政選擇有誤，請重新選擇\n-\n');

    }

    //console.log(`Sugg_Addr4: ${this.Sugg_Addr4}`);
    if (!this.Sugg_Addr4){
      checkList.push('請填寫基本資料，地址路段門牌號碼\n-\n');

    }
    if (this.Input_ValidationCode.length === 0){
      checkList.push('請填寫驗證碼');
    }

    //console.log(`Sugg_Sex: ${this.Sugg_Sex}`);

    //let formData = `Case_Token=${this.Case_Token}&Atth_FileNames=${this.Atth_FileNames}&Subj_Content=${this.Subj_Content}&Subj_District=${this.Subj_District}&Subj_FileCount=${this.Subj_FileCount}&Subj_Item=${this.Subj_Item}&Subj_Security=${this.Subj_Security}&Subj_Subitem=${this.Subj_Subitem}&Sugg_Addr1=${this.Sugg_Addr1}&Sugg_Addr2=${this.Sugg_Addr2}&Sugg_Addr3=${this.Sugg_Addr3}&Sugg_Addr4=${this.Sugg_Addr4}&Sugg_Email=${this.Sugg_Email}&Sugg_Name=${this.Sugg_Name}&Sugg_Sex=${this.Sugg_Sex}&Sugg_Telno=${this.Sugg_Telno}`;
    //console.log(`formData of submit click: ${formData}`);
    //return false;
    if (checkList.length === 0) {
      return true;
    } else {
      var attention = "";
      checkList.forEach(function(item){
          attention = attention+item
      })
      alert(attention)
      return false;
  }
    ; //return false 則不會使 onSubmit 觸發
  }

  // 右側 區選擇
  onDistrictChanged(s: HTMLSelectElement): void{
    this.Sugg_Addr2 = s.value;
    this.Sugg_Addr2_name = this.getDropdownName(s);

    //高雄區
    if (s.value.indexOf('640') === 0){
      this.regionCodes = RegionCodesKaohsiung(s.value);
    }
    else if (s.value && s.value.length === 10 && s.value.indexOf('640') === -1){
      this.subscribes.push(
        this.areaService.getRegions(s.value).subscribe(
          data => this.regionCodes = data
        )
      );
    }
    else {
      this.regionCodes = [];
    }
  }

  // 右側 里選擇
  onRegionChanged(s: HTMLSelectElement): void{
    this.Sugg_Addr3 = s.value;
    this.Sugg_Addr3_name = this.getDropdownName(s);
  }

  // 右側 市鎮選擇
  onChangeCountyCode(s: HTMLSelectElement): void {
    this.Sugg_Addr1_name = this.getDropdownName(s);
    this.Sugg_Addr1 = s.value;
    if (s.value === '6400000000'){ // 高雄市，則不使用 api 取行政區內容
      this.districtCodes = DistrictCodesKaohsiung();
    }
    else if (s.value.length === 10 && s.value !== '6400000000'){
      this.subscribes.push(
        this.areaService.getDistricts(s.value).subscribe(
          data => this.districtCodes = data
        )
      );
    }
    else{
      this.districtCodes = [];
    }
    this.regionCodes = [];
    this.Sugg_Addr3_name = this.region_placeholder;
    this.Sugg_Addr2_name = this.district_placeholder;
  }

  private getDropdownName(e: HTMLSelectElement): string {
    return e.options[e.selectedIndex].innerHTML;
  }

  // 左側 行政區 下拉選項
  onChangeAreaCodes(s: HTMLSelectElement): void {
    this.Subj_District = s.value;
    this.Subj_District_name = this.getDropdownName(s);
  }

  onSubmit(value: any): void {
    //console.log(value);
    //console.log(encodeURIComponent(this.recaptchaCode.HashCode),this.recaptchaCode.HashCode)
    let formData = `Case_Token=${value.Case_Token}&Atth_FileNames=${value.Atth_FileNames}&Subj_Content=${value.Subj_Content}&Subj_District=${value.Subj_District}&Subj_FileCount=${value.Subj_FileCount}&Subj_Item=${value.Subj_Item}&Subj_Security=${value.Subj_Security}&Subj_Subitem=${value.Subj_Subitem}&Sugg_Addr1=${value.Sugg_Addr1}&Sugg_Addr2=${value.Sugg_Addr2}&Sugg_Addr3=${value.Sugg_Addr3}&Sugg_Addr4=${value.Sugg_Addr4}&Sugg_Email=${value.Sugg_Email}&Sugg_Name=${value.Sugg_Name}&Sugg_Sex=${value.Sugg_Sex}&Sugg_Telno=${value.Sugg_Telno}&Input_ValidationCode=${this.Input_ValidationCode}&Hash_Code=${encodeURIComponent(this.recaptchaCode.HashCode)}&Time_Stamp=${this.recaptchaCode.TimeStamp}`;
    //console.log(`formData on submit: ${formData}`);

    this.subscribes.push(
      this.uploadService.postData(formData).subscribe(
        data => {
          if (data) {

            this.getReportDone = !this.getReportDone;
          }
          else {
            alert(`資料上傳不成功。請檢查！`);
          }
        },
        err => {
          console.log(err.status)
          if(err.status === 400){

            this.getValidation();
            this.Input_ValidationCode = '';
          } else {
            console.log(err);
          }

        }
      )
    );
  } // onSubmit
} // export class ReportDetailComponent

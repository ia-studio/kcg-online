/* *
* ref: https://github.com/jkuri/ng2-uploader
* */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from "@angular/core/src/metadata/di";
import { Subscription } from "rxjs";

import { CaseType, SubCaseType } from '../case';
import { ReportService } from '../services/report.service';
import { GeoAddressService } from '../services/geoAddress.service';
import { GeolocationService } from '../services/geoLocation.service';
import { UploadService } from '../services/upload.service';
import { AreaService } from '../services/area.service';

import {DistrictCodesKaohsiung, RegionCodesKaohsiung, CountyCodes, District, County, Region} from './area';
import { Md5 } from './md5';

@Component({
  selector: 'my-report-detail',
  templateUrl: 'report-detail.component.html',
  providers: [ReportService, GeoAddressService, GeolocationService, UploadService, AreaService],
  styleUrls: ['report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit, OnDestroy {
  error: any;
  navigated = false; // true if navigated here
  caseType: CaseType;
  subCaseType: SubCaseType;
  getReportDone = false;
  reportAttention = true;
  areaCodes: District[]; // 左側檢舉址 地區 gps
  districtCodes: District[]; // 右側行政區 下拉項目
  hasher: string; //caseType, subCaseType 的密鑰，避免篡改
  countyCodes: County[]; // 右側基本資料 地址 縣市別
  regionCodes: Region[]; // 右側基本資料 地址 里別

  readonly placeholder: string = '輸入所在地址';
  coords: any;
  gpsFormattedAddress: string;
  gpsDistrict: string;

  readonly county_placeholder: string = '請選擇縣市';
  readonly district_placeholder: string = '請選擇地區';
  readonly region_placeholder: string = '請選擇里別';
  readonly addr4_placeholder: string = '請輸入居住地址';

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

  //uploadFiles: string[] = [];
  uploadFiles: File[] = [];

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private geoLocationService: GeolocationService,
    private geoAddressService: GeoAddressService,
    private uploadService: UploadService,
    private areaService: AreaService
  ) {
    this.Case_Token = this.genCaseToken(12);

    this.areaCodes = DistrictCodesKaohsiung(true); // 左側行政區 gps
    this.districtCodes = []; // 右側行政區下拉項目
    this.gpsDistrict = '';
    this.Subj_District = '6411100000';
    this.countyCodes = CountyCodes();
    this.regionCodes = [];

    this.Subj_FileCount = 0;
    this.Atth_FileNames = '';
    this.Subj_Security = '2'; // 保密等級，always 預設為保密 2
    this.Sugg_Sex = '2'; // 性別，預設為男 2
  }

  ngOnInit() {
    this.subscribes.push(
      this.route.params.subscribe(params => {
        if (params['id'] !== undefined && params['subId'] !== undefined) {
          this.navigated = true;
          this.getType(params['id'], params['subId']);
          window.scrollTo(0, 0);
        }
      })
    );

    this.hasher = Md5(this.genHasherMajorKey());
    this.getLocation();
  }

  getType(id: string, subId: string) {
    this.subscribes.push(
      this.reportService
        .getType(id)
        .subscribe(type => {
          this.caseType = type;
          this.subCaseType = type.Subitems.filter(item => item.Subitem == subId)[0];
        })
    );
  }

  private genHasherMajorKey(): string{
    this.getItemCode();
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
          //console.log(data);
          if (data.results[0] !== null && data.results[0].formatted_address !== null) {
            let addr = data.results[0].formatted_address;
            this.gpsFormattedAddress = addr;
            this.gpsDistrict = addr.substring(addr.indexOf('市') + 1, addr.indexOf('區') + 1);
            this.Subj_District_name = this.gpsDistrict;
            this.adjustGpsResolving(this.gpsDistrict);
            //console.log(this.gpsDistrict);
          }
        }
      )
    );
  }

  adjustGpsResolving(gpsDistrict: string){
    this.districtCodes.filter((data) => {
      if (data.DistrictName === gpsDistrict){
        this.Subj_District = data.DistrictCode;
      }
      //console.log(`gpsDistrict: ${gpsDistrict} ; this.Subj_District: ${this.Subj_District}`);
    });
  }

  /*
  * generate key string as case token
  *
  * */
  private genCaseToken(length: number): string {
    let text: string = ''; //final result
    let possibilities = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    for(let i = 0; i < length; i++ ){
      text += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
    return text;
  }

  @ViewChild("fileInput") fileInput: any;
  addFile(): void {
    let fi: any = this.fileInput.nativeElement;
    if (fi.files) {
      //console.log(fi.files);

      let refiles = this.checkFilenameIsExist(fi.files);
      if (!refiles || refiles.length <= 0)
        return;

      let check = this.checkFiles(refiles);
      if (!check)
        return;

      for(let i=0; i < refiles.length; i++){
        this.uploadFiles.push(refiles[i]);
      }

      let upurl: string = `http://soweb.kcg.gov.tw/webapi/api/AttachFile/Upload/${this.Case_Token}`;
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
    let r0 = this.checkTotalFilesSize(files);
    if (!r0)
      return false;

    for(let i=0; i<files.length; i++){
      let f = files[i];
      let r1 = this.checkFilesSize(f);
      if (!r1)
        return false;

      let r2 = this.checkFileName(f);
      if (!r2)
        return false;

      let r3 = this.checkExtName(f);
      if (!r3)
        return false;
    }
    return true;
  }

  /*
   * check single file size
   * ok = true,
   * > 10MB = false
   *
   * */
  private checkFilesSize(f: File): boolean {
    const limit: number = 10485760; // 10MB = 10 * 1024 * 1024

    let ret = f.size <= limit;
    if (!ret) {
      alert(`'${f.name}' 超過單檔 10MB 上限`);
    }
    return ret;
  }

  /*
   * check total files size
   * ok = true
   * >20MB = false
   *
   * */
  private checkTotalFilesSize(f: File[]): boolean {
    const limit: number = 20971520; //20MB = 20 * 1024 * 1024
    let tsize: number = 0;
    for(let i=0; i<f.length; i++){
      tsize += f[i].size;
    }

    let ret = tsize <= limit;
    if (!ret){
      alert('上傳檔案超過總合 20MB 上限');
    }
    return ret;
  }

  /*
   * check file name contains a ;
   * ok = true;
   * has ; = false;
   *
   * */
  private checkFileName(f: File): boolean {
    let name = '';
    if (f.name.split('.')[0])
      name = f.name.split('.')[0];

    let ret = name.indexOf(';') == -1;
    if (!ret){
      alert(`'${f.name}' 檔名包含 ; 分號`);
    }
    return ret;
  }

  /*
   * check file's ext name
   * ok = true
   *
   * */
  private checkExtName(f: File): boolean {
    let extName = '';
    if (f.name.toLowerCase().split('.')[1])
      extName = f.name.split('.')[1];

    const available = ['doc', 'docx', 'xls', 'xlsx',
      'pdf', 'txt',
      'bmp', 'jpg', 'jpeg', 'gif', 'png', 'odt', 'ods',
      'zip'];
    let ret = available.indexOf(extName.toLowerCase()) >= 0;
    if (!ret){
      alert(`'${f.name}' 副檔名不屬於允許上傳類型`);
    }
    return ret;
  }

  private checkFilenameIsExist(files: File[]): File[]{
    let temp: File[] = [];
    for(let j = 0; j < files.length; j++){
      let fname = files[j].name;
      for(let i = 0; i < this.uploadFiles.length; i++){
        let sameFileName = this.uploadFiles[i].name.indexOf(fname) > -1;
        if (sameFileName){
          alert(`'${fname}' 檔名已存在，請重新選擇檔案`);
          temp = this.sliceItem(files, j);
          return temp;
        }
      } // i
    } // j
    return files;
  }
  private sliceItem(fs: File[], delIndex: number): File[]{
    //wtf! array.splice | slice cannot use here! why?
    let ret: File[] = [];
    if (!fs || !delIndex)
      return [];

    for(let i = 0; i < fs.length; i++){
      if (i !== delIndex){
        ret.push(fs[i]);
      }
    }
    return ret;
  }



  private getItemCode(): void {
    let hp = location.href.split('/'); //直接從目前 url 路徑抓出 主/次項目
    if (hp && hp[hp.length -2] && hp[hp.length -1]){
      this.Subj_Item = hp[hp.length -2];
      this.Subj_Subitem = hp[hp.length -1];
    }
  }

  //hasher hidden
  @ViewChild('subj_item') subj_item: any;
  @ViewChild('subj_subitem') subj_subitem: any;
  @ViewChild('case_token') case_token: any;

  // 檢舉地址：區
  @ViewChild('subj_district') subj_district: any;
  // 基本資料：縣市
  @ViewChild('sugg_county') sugg_county: any;
  // 基本資料：行政區
  @ViewChild('sugg_district') sugg_district: any;
  // 基本資料：里別
  @ViewChild('sugg_region') sugg_region: any;

  onSubmitClick(): boolean{
    // 檢查資料、收集資料

    let hidden_hasher = Md5(`${this.subj_subitem.nativeElement.value}-${this.case_token.nativeElement.value}-${this.subj_item.nativeElement.value}`);
    //console.log(`${this.subj_subitem.nativeElement.value}-${this.case_token.nativeElement.value}-${this.subj_item.nativeElement.value}`);
    //console.log(`hasher: ${hidden_hasher}\nthis.hasher: ${this.hasher}`)
    if (hidden_hasher !== this.hasher){
      alert(`主項目或子項目不符合`); //此項錯誤，表示主/子項目/CaseToken 的 hidden 內容遭篡改!!
      return false;
    }

    this.Subj_District = this.subj_district.nativeElement.value;
    if (!this.Subj_District) {
      alert(`請選擇檢舉地址區域`);
      //console.log(`Subj_District: ${this.Subj_District}`);
      return false;
    }

    //console.log(`Subj_Security: ${this.Subj_Security}`);

    if (!this.Subj_Content || this.Subj_Content.length === 0) {
      alert(`請填寫建議事項`);
      return false;
    }

    // 處理上傳內容
    this.Subj_FileCount = this.uploadFiles.length;
    this.Atth_FileNames = this.joinUploadedFileName(this.uploadFiles);

    // 上傳附件的資料可能有誤，basically, this will not happen
    if ((this.Subj_FileCount && this.Subj_FileCount > 0) && (!this.Atth_FileNames || this.Atth_FileNames.split(';').length === 0)){
      //console.log(`Subj_FileCount: ${this.Subj_FileCount}\nAtth_FileNames: ${this.Atth_FileNames}`);
      alert(`請重新上傳附件`);
      return false;
    }

    // case toekn check
    if (this.Case_Token !== this.Case_Token){
      //console.log(`Case_Token: ${this.Case_Token}`);
      alert(`個案標識 資料異常`);
      return false;
    }

    if (!this.Sugg_Name || this.Sugg_Name.length < 2){
      //console.log(`Sugg_Name: ${this.Sugg_Name}`);
      alert(`請填寫基本資料 姓名`);
      return false;
    }

    if (!this.Sugg_Telno || this.Sugg_Telno.length < 8){
      //console.log(`Sugg_Telno: ${this.Sugg_Telno}`);
      alert(`請填寫基本資料 電話，或格式有誤`);
      return false;
    }

    if (!this.Sugg_Email){
      //console.log(`Sugg_Email: ${this.Sugg_Email}`);
      alert(`請填寫基本資料 Email`);
      return false;
    }
    if (!this.validateEmail(this.Sugg_Email)){
      //console.log(`Sugg_Email: ${this.Sugg_Email}`);
      alert(`基本資料 Email 格式有誤，請重新填寫`);
      return false;
    }

    // 地址1-4
    let value_addr1 = this.sugg_county.nativeElement.value;
    //console.log(`Sugg_Addr1: ${this.Sugg_Addr1}`);
    if (!value_addr1 || value_addr1.length === 0){
      this.Sugg_Addr1 = '';
      alert(`請選擇基本資料 地址 縣市別`);
      return false;
    }
    let value_addr2 = this.sugg_district.nativeElement.value;
    //console.log(`Sugg_Addr2: ${this.Sugg_Addr2}`);
    if (!value_addr2 || value_addr2.length === 0){
      this.Sugg_Addr2 = '';
      alert(`請選擇基本資料 地址 行政區別`);
      return false;
    }
    // 里別，非必填
    let value_addr3 = this.sugg_region.nativeElement.value;
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
      alert(`行政選擇有誤，請重新選擇`);
      return false;
    }

    //console.log(`Sugg_Addr4: ${this.Sugg_Addr4}`);
    if (!this.Sugg_Addr4){
      alert(`請填寫基本資料 地址 路段屋號`);
      return false;
    }

    //console.log(`Sugg_Sex: ${this.Sugg_Sex}`);

    //let formData = `Case_Token=${this.Case_Token}&Atth_FileNames=${this.Atth_FileNames}&Subj_Content=${this.Subj_Content}&Subj_District=${this.Subj_District}&Subj_FileCount=${this.Subj_FileCount}&Subj_Item=${this.Subj_Item}&Subj_Security=${this.Subj_Security}&Subj_Subitem=${this.Subj_Subitem}&Sugg_Addr1=${this.Sugg_Addr1}&Sugg_Addr2=${this.Sugg_Addr2}&Sugg_Addr3=${this.Sugg_Addr3}&Sugg_Addr4=${this.Sugg_Addr4}&Sugg_Email=${this.Sugg_Email}&Sugg_Name=${this.Sugg_Name}&Sugg_Sex=${this.Sugg_Sex}&Sugg_Telno=${this.Sugg_Telno}`;
    //console.log(`formData of submit click: ${formData}`);
    //return false;

    return true; //return false 則不會使 onSubmit 觸發
  }

  private validateEmail(email): boolean {
    let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
  }

  private joinUploadedFileName(files: File[]): string {
    let result = '';
    for(let i=0; i < files.length; i++){
      result += files[i].name + ';';
    }
    if (result.substring(result.length - 1) === ';'){
      result = result.substring(0, result.length - 1);
    }
    //console.log(result);
    return result;
  }

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
    //console.log(`onDistrictChanged: ${this.Sugg_Addr2}`);
  }

  onRegionChanged(s: HTMLSelectElement): void{
    this.Sugg_Addr3 = s.value;
    this.Sugg_Addr3_name = this.getDropdownName(s);
    //console.log(`onRegionChanged: ${this.Sugg_Addr3}`);
  }

  onChangeCountyCode(s: HTMLSelectElement): void {
    this.Sugg_Addr1_name = this.getDropdownName(s);
    this.Sugg_Addr1 = s.value;
    //console.log(`this.Sugg_Addr1: ${this.Sugg_Addr1} ; s.value: ${s.value}`);
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
    //console.log(`onChangeCountyCode: ${this.Sugg_Addr1}`);
  }

  private getDropdownName(e: HTMLSelectElement): string {
    return e.options[e.selectedIndex].innerHTML;
  }

  // 左側 行政區 下拉選項
  onChangeAreaCodes(s: HTMLSelectElement): void {
    this.Subj_District = s.value;
    this.Subj_District_name = this.getDropdownName(s);
    //console.log(`onChangeAreaCodes: ${this.Subj_District_name}\nthis.Subj_District: ${this.Subj_District}\n${s.value}`);
  }

  onSubmit(value: any): void {
    //console.log(value);

    let formData = `Case_Token=${value.Case_Token}&Atth_FileNames=${value.Atth_FileNames}&Subj_Content=${value.Subj_Content}&Subj_District=${value.Subj_District}&Subj_FileCount=${value.Subj_FileCount}&Subj_Item=${value.Subj_Item}&Subj_Security=${value.Subj_Security}&Subj_Subitem=${value.Subj_Subitem}&Sugg_Addr1=${value.Sugg_Addr1}&Sugg_Addr2=${value.Sugg_Addr2}&Sugg_Addr3=${value.Sugg_Addr3}&Sugg_Addr4=${value.Sugg_Addr4}&Sugg_Email=${value.Sugg_Email}&Sugg_Name=${value.Sugg_Name}&Sugg_Sex=${value.Sugg_Sex}&Sugg_Telno=${value.Sugg_Telno}`;
    //console.log(`formData on submit: ${formData}`);

    this.subscribes.push(
      this.uploadService.postData(formData).subscribe(
        data => {
          if (data){
            this.getReportDone = !this.getReportDone;
          }
          else{
            alert(`資料上傳不成功。請檢查！`);
          }
        },
        err => {
          console.log(`err: ${err}`)
        }
      )
    );
  }

}

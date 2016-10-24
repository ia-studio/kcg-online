/* *
* ref: https://github.com/jkuri/ng2-uploader
* */
import {Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from "@angular/core/src/metadata/di";

import { CaseType, SubCaseType } from '../case';
import { ReportService } from '../services/report.service';
import { GeoAddressService } from '../services/geoAddress.service';
import { GeolocationService } from '../services/geoLocation.service';
import { UploadService } from '../services/upload.service';

import { DistrictCodes, RegionCodes } from './area';
import { Md5 } from './md5';

@Component({
  selector: 'my-report-detail',
  templateUrl: 'report-detail.component.html',
  providers: [ReportService, GeoAddressService, GeolocationService, UploadService]
})
export class ReportDetailComponent implements OnInit, OnDestroy {
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  caseType: CaseType;
  subCaseType: SubCaseType;
  getReportDone = false;

  areaCodes: any[];
  hasher: string; //caseType, subCaseType 的密鑰，避免篡改

  readonly placeholder: string = `所在地址 or 使用 GPS 定位`;
  coords: any;
  address: any;
  gpsDistrict: string;
  uploadFileResult: string;

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

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private geoLocationService: GeolocationService,
    private geoAddressService: GeoAddressService,
    private uploadService: UploadService
  ) {
    this.Case_Token = this.genCaseToken(12);

    this.areaCodes = DistrictCodes();
    this.gpsDistrict = '';

    this.Subj_FileCount = 0;
    this.Atth_FileNames = '';
    this.Subj_Security = '1'; // 保密等級，預設為一般 1
    this.Sugg_Sex = '2'; // 性別，預設為男 2
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined && params['subId'] !== undefined) {
        this.navigated = true;
        this.getType(params['id'], params['subId']);
        window.scrollTo(0, 0);
      }
    });

    this.hasher = Md5(this.genHasherMajorKey());
    this.getLocation();
  }

  getType(id: string, subId: string) {
    this.reportService
        .getType(id)
        .subscribe(type => {
          this.caseType = type;
          this.subCaseType = type.Subitems.filter(item => item.Subitem == subId)[0];
        });
  }

  private genHasherMajorKey(): string{
    this.getItemCode();
    return `${this.Subj_Subitem}-${this.Case_Token}-${this.Subj_Item}`
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getLocation(){
    var opt = {
      enableHighAccuracy : true,
      timeout : 5000,
      maximumAge : 0
    };
    this.geoLocationService.getLocation(opt).subscribe(
      data => {
        //console.log(data.coords);
        this.coords = data.coords;
        this.getAddressData(data.coords.latitude, data.coords.longitude);
      }
    );
  }

  private getAddressData(lat, lng){
    this.geoAddressService.getAddressResult(lat, lng).subscribe(
      data => {
        //console.log(data);
        this.address = data.results;

        if (data.results[2] !== null && data.results[2].formatted_address !== null) {
          //this.gpsDistrict = data.results[2].address_components[1].long_name; //830台灣高雄市鳳山區五甲一路564巷2-8號 會出現高雄市而非鳳山市
          let addr = data.results[2].formatted_address;
          this.gpsDistrict = addr.substring(addr.indexOf('市') + 1);
        }
      }
    );
  }

  /*
  * generate key string as case token
  *
  * */
  private genCaseToken(length: number): string {
    var text: string = ''; //final result
    var possibilities = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    for( var i = 0; i < length; i++ ){
      text += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
    return text;
  }

  @ViewChild("fileInput")
  fileInput: any;
  addFile(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files) {
      //console.log(fi.files);

      let check = this.checkFiles(fi.files);
      if (!check)
        return;

      this.Subj_FileCount = fi.files.length;

      for(var i=0; i < fi.files.length; i++){
        this.Atth_FileNames += fi.files[i].name + ';';
      }
      //console.log(`this.Atth_FileNames-1: ${this.Atth_FileNames}`);
      if (this.Atth_FileNames.substring(this.Atth_FileNames.length - 1) === ';'){
        this.Atth_FileNames = this.Atth_FileNames.substring(0, this.Atth_FileNames.length - 1);
      }
      //console.log(`this.Atth_FileNames-2: ${this.Atth_FileNames}`);

      let upurl: string = `http://soweb.kcg.gov.tw/webapi/api/AttachFile/Upload/${this.Case_Token}`;
      this.uploadService.sendFileRequest(upurl, fi.files).subscribe(
        resp => {
          //console.log(resp);
          this.uploadFileResult = resp;
        }
      );
    }
  }

  private checkFiles(files: File[]): boolean {
    let r0 = this.checkTotalFilesSize(files);
    if (!r0)
      return false;

    for(var i=0; i<files.length; i++){
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
    const limit = 10485760; // 10MB = 10 * 1024 * 1024

    let ret = f.size <= limit;
    if (!ret) {
      this.uploadFileResult = `'${f.name}' 超過單檔 10MB 上限`;
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
    const limit = 20971520; //20MB = 20 * 1024 * 1024
    let tsize: number = 0;
    for(var i=0; i<f.length; i++){
      tsize += f[i].size;
    }

    let ret = tsize <= limit;
    if (!ret){
      this.uploadFileResult = '上傳檔案超過總合 20MB 上限';
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
      this.uploadFileResult = `'${f.name}' 檔名包含 ; 分號`;
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
    let ret = available.indexOf(extName) >= 0;
    if (!ret){
      this.uploadFileResult = `'${f.name}' 副檔名不屬於允許上傳類型`;
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
  // 基本資料：行政區
  @ViewChild('sugg_district') sugg_district: any;
  // 基本資料：里別
  @ViewChild('sugg_region') sugg_region: any;
  // 基本資料：里別資料
  sugg_region_data: any[] = [];


  onSubmitClick(): boolean{
    // 檢查資料、收集資料
    //console.log('onSubmitClick!!');

    // 目前已知問題？：以下檢查，alert 錯誤後，地址下拉項目，會跳回 第 1 項

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

    // 上傳附件的資料可能有誤，basically, this will not happen
    if ((this.Subj_FileCount && this.Subj_FileCount > 0) && (!this.Atth_FileNames || this.Atth_FileNames.length === 0)){
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

    this.Sugg_Addr1 = '6400000000';
    // 地址1-4
    if (!this.Sugg_Addr1){
      //console.log(`Sugg_Addr1: ${this.Sugg_Addr1}`);
      alert(`請選擇基本資料 地址 縣市別`);
      return false;
    }
    this.Sugg_Addr2 = this.sugg_district.nativeElement.value;
    //console.log(`Sugg_Addr2: ${this.Sugg_Addr2}`);
    if (!this.Sugg_Addr2){
      alert(`請選擇基本資料 地址 行政區別`);
      return false;
    }
    // 里別，非必填
    this.Sugg_Addr3 = this.sugg_region.nativeElement.value;
    //console.log(`Sugg_Addr3: ${this.Sugg_Addr3}`);
    if (!this.Sugg_Addr3){
      //console.log(`Sugg_Addr3: ${this.Sugg_Addr3}`);
      this.Sugg_Addr3 = '';
    }
    // 確認 行政區、里別 關聯性，錯誤則無法上傳？
    this.Sugg_Addr2 = this.Sugg_Addr3.substring(0, this.Sugg_Addr3.length - 2) + '00';

    if (!this.Sugg_Addr4){
      //console.log(`Sugg_Addr4: ${this.Sugg_Addr4}`);
      alert(`請填寫基本資料 地址 路段屋號`);
      return false;
    }

    //console.log(`Sugg_Sex: ${this.Sugg_Sex}`);
    //let formData = `Case_Token=${this.Case_Token}&Atth_FileNames=${this.Atth_FileNames}&Subj_Content=${this.Subj_Content}&Subj_District=${this.Subj_District}&Subj_FileCount=${this.Subj_FileCount}&Subj_Item=${this.Subj_Item}&Subj_Security=${this.Subj_Security}&Subj_Subitem=${this.Subj_Subitem}&Sugg_Addr1=${this.Sugg_Addr1}&Sugg_Addr2=${this.Sugg_Addr2}&Sugg_Addr3=${this.Sugg_Addr3}&Sugg_Addr4=${this.Sugg_Addr4}&Sugg_Email=${this.Sugg_Email}&Sugg_Name=${this.Sugg_Name}&Sugg_Sex=${this.Sugg_Sex}&Sugg_Telno=${this.Sugg_Telno}`;
    //console.log(`formData: ${formData}`);

    return true; //return false 則不會使 onSubmit 觸發
  }

  private validateEmail(email): boolean {
    var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
  }

  onDistrictChanged(districtCode: string): void{
    this.Sugg_Addr2 = districtCode;
    this.sugg_region_data = RegionCodes(districtCode);
    //console.log(`onDistrictChanged: ${districtCode}\n${this.sugg_region_data}`);
  }

  onSubmit(value: any): void {
    //console.log(value);

    let formData = `Case_Token=${value.Case_Token}&Atth_FileNames=${value.Atth_FileNames}&Subj_Content=${value.Subj_Content}&Subj_District=${value.Subj_District}&Subj_FileCount=${value.Subj_FileCount}&Subj_Item=${value.Subj_Item}&Subj_Security=${value.Subj_Security}&Subj_Subitem=${value.Subj_Subitem}&Sugg_Addr1=${value.Sugg_Addr1}&Sugg_Addr2=${value.Sugg_Addr2}&Sugg_Addr3=${value.Sugg_Addr3}&Sugg_Addr4=${value.Sugg_Addr4}&Sugg_Email=${value.Sugg_Email}&Sugg_Name=${value.Sugg_Name}&Sugg_Sex=${value.Sugg_Sex}&Sugg_Telno=${value.Sugg_Telno}`;
    //console.log(`formData: ${formData}`);

    this.uploadService.postData(formData).subscribe(
      data => {
        //console.log(`postData subscribe: ${data}`);
        if (data){
          //alert(`case uploaded!`);
          this.getReportDone = !this.getReportDone;
        }
      },
      err => {
        console.log(`err: ${err}`)
      }
    );


  }


}

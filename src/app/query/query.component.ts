import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Subscription} from "rxjs";
import 'rxjs/Rx';

import { Case }         from '../shared/case';
import { QueryService, RecaptchaCode } from './query.service';

@Component({
  selector: 'app-query',
  templateUrl: 'query.component.html',
  providers: [QueryService]
})
export class QueryComponent implements OnInit, OnDestroy {
  public constructor(
    private titleService: Title,
    private qService: QueryService
  ){
    //
  }
  searchCase: Case;
  error: any;
  private subscriptions: Subscription[] = [];

  private isMayorMail?: boolean; //市長信箱 Result
  private isCivilianSuggest?: boolean; //人民陳情 Result
  private queryBErr: string;
  private queryVErr: string;
  private recaptchaCode: RecaptchaCode;
  private recaptchaCode2: RecaptchaCode;
  private recaptchaImg: string;
  private recaptchaImg2: string;
  private errType = {
    notFound: '您查詢的內容不存在，請重新輸入。',
    numErr: '案件編號欄位為必填',
    mailErr: '查詢email有誤。請重新輸入。',
    yearErr: '案件編號-年份有誤。請重新輸入。',
    keyErr: '案件編號有誤。請重新輸入。',
    nameErr: '來電時的姓名有誤。請重新輸入。'};

  displayDetail: boolean = false;
  caseNo: string = '';
  email: string = ''; // 市長信箱 Email
  bCapcha: string;

  vp0: string = 'A';
  vp1: string = 'TB';
  vyear: number = new Date().getFullYear(); //as p2
  vp3: string;
  aCapcha: string;
  validateTime = 9*60*1000;
  callerName: string = ''; // 人民陳情 來電時的姓名

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('案件查詢 - 高雄市政府線上即時服務平台');
    window.scrollTo(0, 0);
    this.getValidation();
    setTimeout(() => { this.getValidation2(); }, 500);
    setInterval(() => { this.getValidation(); }, this.validateTime);
    setInterval(() => { this.getValidation2(); }, this.validateTime+500);

  }

  closeDetail() {
    this.displayDetail = false;
    this.searchCase = null;
    this.caseNo = "";
    this.email = "";
    this.bCapcha = "";
    this.vp3 = "";
    this.callerName = "";
    this.aCapcha = "";
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  getValidation() {
    this.qService
      .getValidationCode()
      .subscribe(recaptcha => {
       this.recaptchaCode = recaptcha,
       this.recaptchaImg = "data:image/gif;base64,"+ recaptcha.ValidationCode; });
  }
  getValidation2() {
    this.qService
      .getValidationCode()
      .subscribe(recaptcha => {
       this.recaptchaCode2 = recaptcha,
       this.recaptchaImg2 = "data:image/gif;base64,"+ recaptcha.ValidationCode; });
  }

  queryB(){ //市長信箱查詢
    this.queryVErr = "";
    if (!this.validateCaseNo(this.caseNo)){

      return this.queryBErr = this.errType.numErr;
    }
    if (!this.validateEmail(this.email)){

      return this.queryBErr = this.errType.mailErr;
    }

    this.subscriptions.push(
      this.qService.getBResult(
          this.caseNo,
          this.email,
          this.recaptchaCode.TimeStamp+this.bCapcha+encodeURIComponent(this.recaptchaCode.HashCode)
        ).subscribe(data => {
        this.searchCase = data;
        //console.log(data);
        this.displayDetail = true;
        this.isMayorMail = true;
        this.searchCase.isMayorMail = true;
      }, (err: any) => {
        //console.log(err);
        if (err.status == 404){
          return this.queryBErr = this.errType.notFound;
        }
        else if (err.status == 400){
          return this.queryBErr = err.json();
        }

      })
    );
  }

  private validateCaseNo(caseNo): boolean {
    // 改驗證該欄位為必填
    return caseNo !== '';
  }

  private validateEmail(email): boolean {
    var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
  }

  queryV(){ //人民陳情查詢
    //
    this.queryVErr = "";
    if (this.vyear == null || this.vyear.toString().length < 4){
      return this.queryVErr = this.errType.yearErr;
    }
    if (this.vp3 == null || this.vp3.length == 0){
      return this.queryVErr = this.errType.keyErr;
    }
    if (this.callerName == null || this.callerName.length == 0){
      return this.queryVErr = this.errType.nameErr;
    }

    this.subscriptions.push(
      //this.vp1 = 'AK';
      this.qService.getVResult(
          this.vp0,
          this.vp1,
          this.vyear,
          this.vp3,
          this.callerName,
          this.recaptchaCode2.TimeStamp+this.aCapcha+ encodeURIComponent(this.recaptchaCode2.HashCode)
        ).subscribe(data => {
        this.searchCase = data;
        //console.log(data);
        this.displayDetail = true;
        this.isCivilianSuggest = true;
        this.searchCase.isCivilianSuggest = true;
      }, (err: any) => {
        if (err.status == 404){
          return this.queryVErr = this.errType.notFound;
        } else if (err.status == 400){
          return this.queryVErr = err.json();
        }
      })
    );
  }

}

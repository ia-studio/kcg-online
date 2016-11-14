import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import 'rxjs/Rx';

import { Case }         from '../shared/case';
import { QueryService } from './query.service';

@Component({
  selector: 'app-query',
  templateUrl: 'query.component.html',
  providers: [QueryService]
})
export class QueryComponent implements OnInit {
  public constructor(
    private titleService: Title,
    private qService: QueryService
  ){
    //
  }
  searchCase: Case;
  error: any;


  private isMayorMail?: boolean; //市長信箱 Result
  private isCivilianSuggest?: boolean; //人民陳情 Result
  private queryBErr: string;
  private queryVErr: string;
  private errType = {
    notFound: '您查詢的內容不存在，請重新輸入。',
    numErr: '查詢案件編號不足6碼。請重新輸入。',
    mailErr: '查詢email有誤。請重新輸入。',
    yearErr: '案件編號-年份有誤。請重新輸入。',
    keyErr: '案件編號有誤。請重新輸入。',
    nameErr: '來電時的姓名有誤。請重新輸入。'};

  displayDetail: boolean = false;
  caseNo: string = '';
  email: string = ''; // 市長信箱 Email

  vp1: string = 'TB';
  vyear: number = new Date().getFullYear(); //as p2
  vp3: string;
  callerName: string = ''; // 人民陳情 來電時的姓名

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('案件查詢 - 高雄市政府線上即時服務平台');
    window.scrollTo(0, 0);
  }

  queryB(){ //市長信箱查詢
    if (!this.validateCaseNo(this.caseNo)){

      return this.queryBErr = this.errType.numErr;
    }
    if (!this.validateEmail(this.email)){

      return this.queryBErr = this.errType.mailErr;
    }

    this.qService.getBResult(this.caseNo, this.email).subscribe(data => {
      this.searchCase = data;
      //console.log(data);
      this.displayDetail = true;
      this.isMayorMail = true;
      this.searchCase.isMayorMail = true;
    }, (err: any) => {
      //console.log(err);
      if (err.status !== 200){
        return this.queryBErr = this.errType.notFound;
      }
    });
  }

  private validateCaseNo(caseNo): boolean {
    return caseNo.length >= 6;
  }

  private validateEmail(email): boolean {
    var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
  }

  queryV(){ //人民陳情查詢
    //
    if (this.vyear == null || this.vyear.toString().length < 4){
      return this.queryVErr = this.errType.yearErr;
    }
    if (this.vp3 == null || this.vp3.length == 0){
      return this.queryVErr = this.errType.keyErr;
    }
    if (this.callerName == null || this.callerName.length == 0){
      return this.queryVErr = this.errType.nameErr;
    }

    //this.vp1 = 'AK';
    this.qService.getVResult(this.vp1, this.vyear, this.vp3, this.callerName).subscribe(data => {
      this.searchCase = data;
      //console.log(data);
      this.displayDetail = true;
      this.isCivilianSuggest = true;
      this.searchCase.isCivilianSuggest = true;
    }, (err: any) => {
      if (err.status !== 200){
        return this.queryVErr = this.errType.notFound;
      }
    });
  }

}

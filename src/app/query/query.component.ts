import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import 'rxjs/Rx';

import { Case }         from '../case';
import { CaseService }  from '../case.service';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-query',
  templateUrl: 'query.component.html',
  providers: [CaseService, QueryService]
})
export class QueryComponent implements OnInit {
  public constructor(
    private titleService: Title,
    private caseService: CaseService,
    private qService: QueryService
  ){
    //
  }
  searchCase: Case;
  error: any;

  private errMessage: string = '您查詢的內容不存在，請重新輸入。';
  private isMayorMail?: boolean; //市長信箱 Result
  private isCivilianSuggest?: boolean; //人民陳情 Result

  displayDetail: boolean = false;
  caseNo: string = '';
  email: string = ''; // 市長信箱 Email

  vyear: number = new Date().getFullYear(); //as p3
  callerName: string = ''; // 人民陳情 來電時的姓名



  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getCases() {
    this.caseService
        .getCases()
        //.then(mycase => this.searchCase = mycase)
        //.catch(error => this.error = error);
  }

  ngOnInit() {
    this.setTitle('案件查詢 - 高雄市政府線上即時服務平台');
    this.getCases();
  }

  queryB(){ //市長信箱查詢
    if (!this.validateCaseNo(this.caseNo)){
      alert('查詢案件編號不足6碼。請重新輸入。');
      return;
    }
    if (!this.validateEmail(this.email)){
      alert('查詢email有誤。請重新輸入。');
      return;
    }

    this.qService.getBResult(this.caseNo, this.email).subscribe(data => {
      this.searchCase = data;
      //console.log(data);
      this.displayDetail = true;
      this.isMayorMail = true;
    }, (err: any) => {
      //console.log(err);
      if (err.status !== 200){
        alert(this.errMessage);
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
    this.qService.getVResult('AK', this.vyear, '3', this.callerName).subscribe(data => {
      this.searchCase = data;
      //console.log(data);
      this.displayDetail = true;
      this.isCivilianSuggest = true;
    }, (err: any) => {
      if (err.status !== 200){
        alert(this.errMessage);
      }
    });
  }

}

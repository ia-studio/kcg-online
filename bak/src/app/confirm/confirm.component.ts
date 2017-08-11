import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as moment           from 'moment';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  queryExist: boolean;
  key: string;
  val: string;
  sub: any;
  timeFormate: string;

  constructor(private activatedRoute: ActivatedRoute) {
      // console.log(activatedRoute.queryParams['']);
      this.queryExist = true;
      this.timeFormate = 'YYYY MM DD hh:mm:ss'
  }

  getdate(){
    let date = this.val.split('',14);
    let year = date[0]+date[1]+date[2]+date[3]+'年',
        month = date[4]+date[5]+'月',
        day = date[6]+date[7]+'日 ',
        hour = date[8]+date[9]+'點',
        min = date[10]+date[11]+'分',
        sec = date[12]+date[13]+'秒';
    return year+month+day+hour+min+sec;

  }
  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
        if (params['FirstConfirm']!==undefined) {
            this.key = 'firstConfirm';
            this.val = params['FirstConfirm'];
        } else if(params['DateTime']!==undefined) {
            this.key = 'dateTime';
            this.val = params['DateTime'];
        } else if (params['CaseNo']!==undefined){
            this.key = 'caseNo';
            this.val = params['CaseNo'];
        } else if (params['Error']!==undefined){
            this.key = 'error';
            this.val = params['Error'];
        } else {
          this.queryExist = false;
        }
      });
  }

}

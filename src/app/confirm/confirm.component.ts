import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {


  querySet: string[];
  queryExist: boolean;
  key: string;
  val: string;

  constructor(private activatedRoute: ActivatedRoute) {
      this.querySet= window.location.href.split('?')[1].split('=');
      this.queryExist = (this.querySet[0]=='firstconfirm' || this.querySet[0]=='datetime' || this.querySet[0]=='caseNo' || this.querySet[0]== 'error')? true : false;
      
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
    if (this.queryExist) {
        this.key = this.querySet[0];
        this.val = this.querySet[1];
        
    }
    
    
  }

}

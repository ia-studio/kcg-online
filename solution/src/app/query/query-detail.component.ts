import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Title }                  from '@angular/platform-browser';
import { Case }                   from '../shared/case';
import * as moment                from 'moment';

@Component({
  selector: 'app-query-detail',
  templateUrl: 'query-detail.component.html'
})
export class QueryDetailComponent implements OnInit {
  public constructor(private titleService: Title) { }

  @Input() searchCase: Case;

  error: any;

  @Input() isMayorMail?: boolean; //true = MayorMail, fasle = CivilianSuggest

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  @Output() closeDetail = new EventEmitter();

  ngOnInit() {
    this.setTitle('案件明細 - 高雄市政府線上即時服務平台');
    window.scrollTo(0, 0);
  }
  changeDateFormat(data:string){
    return moment(data).format('YYYY-MM-DD');
  }
  gotoquery() {
    window.location.reload();
  }
  goBack() {
    this.closeDetail.emit();
  }
}

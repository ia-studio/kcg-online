import {Component, OnInit, Input} from '@angular/core';
import { Title }       from '@angular/platform-browser';

import { Case }        from '../case';
import { CaseService } from '../case.service';
import { ReplaceNewLinePipe } from '../filters/Replace.pipe';

@Component({
  selector: 'app-query-detail',
  templateUrl: 'query-detail.component.html',
  pipes: [ReplaceNewLinePipe],
  providers: [CaseService]
})
export class QueryDetailComponent implements OnInit {
  public constructor(private titleService: Title) { }

  @Input()
  searchCase: Case;

  error: any;

  @Input()
  isMayorMail?: boolean; //true = MayorMail, fasle = CivilianSuggest

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('案件明細 - 高雄市政府線上即時服務平台');
    console.log(this.searchCase);
  }
}

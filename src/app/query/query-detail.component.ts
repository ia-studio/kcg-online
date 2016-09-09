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
  public constructor(private titleService: Title, private caseService: CaseService) { }

  @Input()
  searchCase: Case;
  error: any;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getCases() {
    this.caseService
        .getCases()
        //.then(mycase => this.searchCase = mycase);
        //.catch(error => this.error = error);
  }

  ngOnInit() {
    this.setTitle('案件明細 - 高雄市政府線上即時服務平台');
    this.getCases();
    //console.log(this.searchCase);
  }
}

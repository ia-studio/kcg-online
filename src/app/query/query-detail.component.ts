import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import { Case }              from '../case';
import { CaseService }       from '../case.service';

@Component({
  selector: 'app-query-detail',
  templateUrl: 'query-detail.component.html',
  providers: [CaseService]
})
export class QueryDetailComponent implements OnInit {
  public constructor(private titleService: Title, private caseService: CaseService) { }
  searchCase: Case;
  error: any;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getCases() {
    this.caseService
        .getCases()
        .then(mycase => this.searchCase = mycase)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.setTitle('案件明細 - 高雄市政府線上即時服務平台');
    this.getCases();
  }
}

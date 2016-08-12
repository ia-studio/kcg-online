import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import { Case }              from '../case';
import { CaseService }       from '../case.service';

@Component({
  selector: 'app-query',
  templateUrl: 'app/query/query.component.html',
  providers: [CaseService]
})
export class QueryComponent implements OnInit {
  public constructor(private titleService: Title, private caseService: CaseService) { }
  searchCase: Case;
  error: any;
  pop: false;

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
    this.setTitle('案件查詢 - 高雄市政府線上即時服務平台');
    this.getCases();
  }
}
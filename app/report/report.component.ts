import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Title }             from '@angular/platform-browser';
import { Case }              from '../case';
import { CaseService }       from '../case.service';

@Component({
  selector: 'app-report',
  templateUrl: 'app/report/report.component.html',
  providers: [CaseService]
})
export class ReportComponent implements OnInit {
  cases: Case[];
  error: any;

  public constructor(private titleService: Title, private caseService: CaseService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getCases() {
    this.caseService
        .getCases()
        .then(cases => this.cases = cases)
        .catch(error => this.error = error);
  }


  ngOnInit() {
    this.setTitle('市長信箱 - 高雄市政府線上即時服務平台');
    this.getCases();
  }
}

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title }             from '@angular/platform-browser';
import { CaseType }          from '../case';
import { CaseService }       from '../case.service';

@Component({
  selector: 'app-report',
  templateUrl: 'app/report/report.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [CaseService]
})
export class ReportComponent implements OnInit {
  caseTypes: CaseType[];
  error: any;

  public constructor(private titleService: Title, private caseService: CaseService) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getTypes() {
    this.caseService
        .getTypes()
        .then(types => this.caseTypes = types)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.setTitle('市長信箱 - 高雄市政府線上即時服務平台');
    this.getTypes();
  }
}

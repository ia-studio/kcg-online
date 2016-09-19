import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { CaseType, SubCaseType }        from '../case';
import { ReportService }                from '../services/report.service';

@Component({
  selector: 'my-report-detail',
  templateUrl: 'report-detail.component.html',
  providers: [ReportService]
})
export class ReportDetailComponent implements OnInit, OnDestroy {
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  caseType: CaseType;
  subCaseType: SubCaseType;
  getReportDone = false;
  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined && params['subId'] !== undefined) {
        this.navigated = true;
        this.getType(params['id'], params['subId']);
      }
    });
  }

  getType(id: string, subId: string) {
    this.reportService
        .getType(id)
        .subscribe(type => {
          this.caseType = type;
          this.subCaseType = type.Subitems.filter(item => item.Subitem == subId)[0];
        });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

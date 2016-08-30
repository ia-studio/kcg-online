import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { CaseType, SubCaseType }        from '../case';
import { CaseService }                  from '../case.service';

@Component({
  selector: 'my-report-detail',
  templateUrl: 'report-detail.component.html',
  providers: [CaseService]
})
export class ReportDetailComponent implements OnInit, OnDestroy {
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  caseType: CaseType;
  subCaseType: SubCaseType;
  constructor(private route: ActivatedRoute, private caseService: CaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined && params['subId'] !== undefined) {
        this.navigated = true;
        this.getType(params['id'], params['subId']);
      }
    });
  }

  getType(id: string, subId: string) {
    this.caseService
        .getType(id)
        .then(type => this.caseType = type)
        .then(subType => this.subCaseType = subType.Subitems.find(item => item.Subitem === subId))
        .catch(error => this.error = error);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { Case, CaseDetail }             from '../case';
import { CaseService }                  from '../case.service';

@Component({
  selector: 'my-report-detail',
  templateUrl: 'app/report/report-detail.component.html',
  providers: [CaseService]
})
export class ReportDetailComponent implements OnInit, OnDestroy {
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  case: Case;
  subCase: CaseDetail;
  constructor(private route: ActivatedRoute, private caseService: CaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined && params['subId'] !== undefined) {
        this.navigated = true;
        this.getCase(params['id'], params['subId']);
      }
    });
  }

  getCase(id: string, subId: string) {
    this.caseService
        .getCase(id)
        .then(mycase => this.case = mycase)
        .then(mycase => this.subCase = mycase.subItems.find(item => item.id === subId))
        .catch(error => this.error = error);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
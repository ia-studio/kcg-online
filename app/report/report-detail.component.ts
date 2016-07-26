import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-report-detail',
  templateUrl: 'app/report/report-detail.component.html',
})
export class ReportDetailComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  title: string;

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.title = params['id'];
        this.navigated = true;
      }
    });
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
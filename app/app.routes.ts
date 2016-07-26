import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent }           from './dashboard.component';
import { HeroesComponent }              from './heroes.component';
import { HeroDetailComponent }          from './hero-detail.component';
import { ReportComponent }              from './report/report.component';
import { ReportDetailComponent }        from './report/report-detail.component';
import { SearchComponent }              from './search/search.component';
import { ProcessComponent }             from './process/process.component';
import { FaqComponent }                 from './faq/faq.component';
import { FeedbackComponent }            from './feedback/feedback.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/report',
    pathMatch: 'full'
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'report/:id',
    component: ReportDetailComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'process',
    component: ProcessComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
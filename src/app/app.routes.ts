import { Routes, RouterModule }         from '@angular/router';
import { ReportComponent }              from './report/report.component';
import { ReportDetailComponent }        from './report/report-detail.component';
import { QueryComponent }               from './query/query.component';
import { ProcessComponent }             from './process/process.component';
import { FaqComponent }                 from './faq/faq.component';
import { FeedbackComponent }            from './feedback/feedback.component';

const appRoutes: Routes = [
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
    path: 'report/:id/:subId',
    component: ReportDetailComponent
  },
  {
    path: 'query',
    component: QueryComponent
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
    path: '**',
    component: ReportComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

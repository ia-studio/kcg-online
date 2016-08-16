import { Routes, RouterModule }         from '@angular/router';
import { ReportComponent }              from './report/report.component';
import { ReportDetailComponent }        from './report/report-detail.component';
import { QueryComponent }               from './query/query.component';
<<<<<<< HEAD:src/app/app.routes.ts
=======
import { QueryDetailComponent }         from './query/query-detail.component';
>>>>>>> add-ng2:app/app.routes.ts
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
    path: 'query/:id',
    component: QueryDetailComponent
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

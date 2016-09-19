import { Routes, RouterModule }         from '@angular/router';
import { NewsComponent }                from './news/news.component';
import { ReportComponent }              from './report/report.component';
import { ReportDetailComponent }        from './report/report-detail.component';
import { QueryComponent }               from './query/query.component';
import { QueryDetailComponent }         from './query/query-detail.component';
import { ProcessComponent }             from './process/process.component';
import { FaqComponent }                 from './faq/faq.component';
import { FaqDetailComponent }           from './faq/faq-detail.component';
import { FeedbackComponent }            from './feedback/feedback.component';
import { CopyrightComponent }           from './copyright/copyright.component';
import { SecurityComponent }            from './security/security.component';
import { PrivacyComponent }             from './privacy/privacy.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/report',
    pathMatch: 'full'
  },
  {
    path: 'news/:id',
    component: NewsComponent
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
    path: 'faq/:organNo/:seqNo',
    component: FaqDetailComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'copyright',
    component: CopyrightComponent
  },
  {
    path: 'security',
    component: SecurityComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: '**',
    component: ReportComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

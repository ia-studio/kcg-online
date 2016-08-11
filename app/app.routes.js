"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var report_component_1 = require('./report/report.component');
var report_detail_component_1 = require('./report/report-detail.component');
var query_component_1 = require('./query/query.component');
var process_component_1 = require('./process/process.component');
var faq_component_1 = require('./faq/faq.component');
var feedback_component_1 = require('./feedback/feedback.component');
var routes = [
    {
        path: '',
        redirectTo: '/report',
        pathMatch: 'full'
    },
    {
        path: 'report',
        component: report_component_1.ReportComponent
    },
    {
        path: 'report/:id/:subId',
        component: report_detail_component_1.ReportDetailComponent
    },
    {
        path: 'query',
        component: query_component_1.QueryComponent
    },
    {
        path: 'process',
        component: process_component_1.ProcessComponent
    },
    {
        path: 'faq',
        component: faq_component_1.FaqComponent
    },
    {
        path: 'feedback',
        component: feedback_component_1.FeedbackComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: '**',
        component: report_component_1.ReportComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routes.js.map
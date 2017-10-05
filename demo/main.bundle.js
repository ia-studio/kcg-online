webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap index\" [ngClass]=\"{active: showSlideMenu}\">\n    <div class=\"container shadow-3d\">\n        <nav class=\"header row index\">\n            <ul class=\"other-links\">\n              <li><a href=\"./\">首頁</a><small>|</small></li>\n              <li><a href=\"http://work1999.kcg.gov.tw/list.aspx\" target=\"_blank\">派工案件查詢</a><small>|</small></li>\n              <li><a href=\"http://www.kcg.gov.tw/\" target=\"_blank\">高雄市政府全球資訊網</a></li>\n            </ul>\n            <h1 class=\"header-band\">\n                <a href='./'>\n                  <img calss=\"pull-left\" src=\"./assets/images/Kao_logo.png\" width=\"40\" alt=\"\">\n                  <p>\n                      <span class=\"navy\">線上即時服務系統 </span><br>\n                      <small class=\"navy\">Service online</small>\n                  </p>\n                </a>\n                <div class=\"news visible-xs maT1x\" (click)=\"showNews=!showNews\"><a href=\"javascript:void(0)\"><i class=\"fa fa-info\"></i></a></div>\n                <div class=\"mob-menu visible-xs\" (click)=\"showSlideMenu=!showSlideMenu\"></div>\n            </h1>\n            <div class=\"header-right hidden-xs\">\n                <div class=\"mob-menu visible-md visible-sm\" (click)=\"showSlideMenu=!showSlideMenu\"></div>\n                <div class=\"news visible-md visible-sm maT1x\" (click)=\"showNews=!showNews\"><a href=\"javascript:void(0)\"><i class=\"fa fa-info\"></i></a></div>\n                <ul class=\"header-menu visible-lg\">\n                    <li class=\"menu-item\" routerLinkActive=\"active\"><a [routerLink]=\"['/report']\">市長信箱</a></li>\n                    <li class=\"menu-item\" routerLinkActive=\"active\"><a [routerLink]=\"['/query']\">案件查詢</a></li>\n                    <li class=\"menu-item\" routerLinkActive=\"active\"><a [routerLink]=\"['/process']\">服務流程</a></li>\n                    <li class=\"menu-item\" routerLinkActive=\"active\"><a [routerLink]=\"['/faq', '1']\">常見問題 FAQ</a></li>\n                    <li class=\"menu-item\" routerLinkActive=\"active\"><a [routerLink]=\"['/feedback', 'point']\">案件處理滿意度</a></li>\n                    <li class=\"menu-item\"><a href=\"http://work1999.kcg.gov.tw/Rptdownload.aspx\" target=\"_blank\">案件反應排行榜</a></li>\n                    <li class=\"menu-item\"><a href=\"http://disdp.kcg.gov.tw/exchange/feedback.php\" target=\"_blank\">廉政案件</a></li>\n                    <li class=\"menu-item\" (click)=\"showNews=!showNews\"><a><i class=\"fa fa-info\"></i></a></li>\n                </ul>\n            </div>\n            <div class=\"header-news\" *ngIf=\"showNews\">\n                <div class=\"news-visble\">\n                  <ul class=\"news-list\">\n                    <li [ngClass]=\"{'active':showNowNews(i)}\" *ngFor=\"let newsItem of news; let i = index\">\n                      <a [routerLink]=\"['/news', newsItem.MsgID]\">{{newsItem.MsgTitle}}</a>\n                    </li>\n                  </ul>\n                  <span class=\"pull-right\" (click)=\"showNews=false\"><i class=\"fa fa-times-circle\"></i></span>\n                </div>\n            </div>\n        </nav>\n    </div>\n    <router-outlet></router-outlet>\n    <footer>\n        <div class=\"container\">\n            <div class=\"row pdLR1x\">\n                <div class=\"footer col-md-10 col-sm-12 col-xs-12\">\n                    <img class=\"pull-left pdR1x visible-lg visible-md\" src=\"./assets/images/qrcode.png\" alt=\"\">\n\n                    <p class=\"footer-info\">\n                        本系統由 <a class=\"link\">高雄市政府資訊中心</a> 維護<br>\n                    </p>\n                    <small class=\"pdT2x font-sm\">當系統處於定期維護時間每日凌晨 01:00 ~ 02:00 時，<br>主機可能會停止所有服務，如有不便還請見諒。<br><br>\n\t\t\t\t高雄市政府聯合服務中心電話：</small>\n                    <h5 class=\"font-lg\">(07) 336-8333 #2819、#2833、#2834</h5>\n                    <div class=\"text-center\" [hidden]=\"!globalService.showPhoneButton\">\n                        <a href=\"tel:073368333\" class=\"btn btn-orange visible-sm visible-xs\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp;&nbsp;撥打電話</a>\n                    </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <ul class=\"link-group font-md hidden-sm hidden-xs\">\n                        <li><a [routerLink]=\"['/term','privacy']\">隱私權保護政策</a></li>\n                        <li><a [routerLink]=\"['/term','security']\">網站安全政策</a></li>\n                        <li><a [routerLink]=\"['/term','copyright']\">著作權聲明</a></li>\n                        <li><a href=\"http://www.kcg.gov.tw/\" target=\"blank\">高雄市政府全球資訊網</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </footer>\n</div>\n<div class=\"mob-menu-list\" [ngClass]=\"{active: showSlideMenu}\">\n    <div class=\"mob-menu-close\" [ngClass]=\"{active: showSlideMenu}\" (click)=\"showSlideMenu=false\"></div>\n    <ul class=\"header-menu active\">\n        <li class=\"menu-item \" routerLinkActive=\"active\" (click)=\"showSlideMenu=false\"><a [routerLink]=\"['/report']\">市長信箱</a></li>\n        <li class=\"menu-item \" routerLinkActive=\"active\" (click)=\"showSlideMenu=false\"><a [routerLink]=\"['/query']\">案件查詢</a></li>\n        <li class=\"menu-item \" routerLinkActive=\"active\" (click)=\"showSlideMenu=false\"><a [routerLink]=\"['/process']\">服務流程</a></li>\n        <li class=\"menu-item \" routerLinkActive=\"active\" (click)=\"showSlideMenu=false\"><a [routerLink]=\"['/faq', '1']\">常見問題 FAQ</a></li>\n        <li class=\"menu-item \" (click)=\"showSlideMenu=false\"><a [routerLink]=\"['/feedback', 'point']\">案件處理滿意度</a>\n            <ul class=\"mob-sub-menu\">\n                <li class=\"menu-item\" routerLinkActive=\"active\"><a [routerLink]=\"['/feedback', 'point']\">各項滿意度調查</a></li>\n                <li class=\"menu-item\" routerLinkActive=\"active\"><a [routerLink]=\"['/feedback', 'count']\">各問題次數分配表</a></li>\n                <li class=\"menu-item\" routerLinkActive=\"active\"><a [routerLink]=\"['/feedback', 'effective']\">各問題有效值與遺漏值</a></li>\n            </ul>\n        </li>\n        <li class=\"menu-item\"><a href=\"http://work1999.kcg.gov.tw/Rptdownload.aspx\" target=\"_blank\">案件反應排行榜</a></li>\n        <li class=\"menu-item\"><a href=\"http://disdp.kcg.gov.tw/exchange/feedback.php\" target=\"_blank\">廉政案件</a></li>\n        <li class=\"menu-item\"><a href=\"http://work1999.kcg.gov.tw/list.aspx\" target=\"_blank\">派工案件查詢</a></li>\n\n        <li class=\"menu-item\"><a [routerLink]=\"['/term','privacy']\" (click)=\"showSlideMenu=false\">隱私權保護政策</a></li>\n        <li class=\"menu-item\"><a [routerLink]=\"['/term','security']\" (click)=\"showSlideMenu=false\">網站安全政策</a></li>\n        <li class=\"menu-item\"><a [routerLink]=\"['/term','copyright']\" (click)=\"showSlideMenu=false\">著作權聲明</a></li>\n        <li class=\"menu-item\"><a href=\"http://www.kcg.gov.tw/\" target=\"blank\">高雄市政府全球資訊網</a></li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news_service__ = __webpack_require__("../../../../../src/app/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_global_service__ = __webpack_require__("../../../../../src/app/shared/global.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(route, newsService, globalService) {
        this.route = route;
        this.newsService = newsService;
        this.globalService = globalService;
        this.showNews = true;
        this.showSlideMenu = false;
        this.newsCount = 0;
        this.news = [];
    }
    AppComponent.prototype.showNowNews = function (idx) {
        return (this.newsCount % this.news.length) === idx;
    };
    AppComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService
            .getNews()
            .subscribe(function (news) { return _this.news = news; }, function (error) { return _this.news = []; });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNews();
        setInterval(function () { if (_this.showNews) {
            _this.newsCount++;
        } }, 3000);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'kcg-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__news_news_service__["a" /* NewsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__news_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__news_news_service__["a" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_global_service__["a" /* GlobalService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq__ = __webpack_require__("../../../../../src/app/faq/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__process_process_component__ = __webpack_require__("../../../../../src/app/process/process.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__query__ = __webpack_require__("../../../../../src/app/query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__report__ = __webpack_require__("../../../../../src/app/report/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__term_term_component__ = __webpack_require__("../../../../../src/app/term/term.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_global_service__ = __webpack_require__("../../../../../src/app/shared/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_18__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: __WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* environment */].googleMapApiKey
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__faq__["a" /* FaqComponent */],
            __WEBPACK_IMPORTED_MODULE_9__process_process_component__["a" /* ProcessComponent */],
            __WEBPACK_IMPORTED_MODULE_10__query__["a" /* QueryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__report__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_8__feedback_feedback_component__["a" /* FeedbackComponent */],
            __WEBPACK_IMPORTED_MODULE_7__faq__["b" /* FaqDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__query__["b" /* QueryDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__report__["b" /* ReportDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__term_term_component__["a" /* TermComponent */],
            __WEBPACK_IMPORTED_MODULE_13__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__confirm_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_16__question_question_component__["a" /* QuestionComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["b" /* appRoutingProviders */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* HashLocationStrategy */] },
            __WEBPACK_IMPORTED_MODULE_14__shared_global_service__["a" /* GlobalService */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NO_ERRORS_SCHEMA */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report_detail_component__ = __webpack_require__("../../../../../src/app/report/report-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__query_query_component__ = __webpack_require__("../../../../../src/app/query/query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__query_query_detail_component__ = __webpack_require__("../../../../../src/app/query/query-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__process_process_component__ = __webpack_require__("../../../../../src/app/process/process.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__faq_faq_detail_component__ = __webpack_require__("../../../../../src/app/faq/faq-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__term_term_component__ = __webpack_require__("../../../../../src/app/term/term.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });













var appRoutes = [
    {
        path: '',
        redirectTo: '/report',
        pathMatch: 'full'
    },
    {
        path: 'news/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__news_news_component__["a" /* NewsComponent */]
    },
    {
        path: 'report',
        component: __WEBPACK_IMPORTED_MODULE_2__report_report_component__["a" /* ReportComponent */]
    },
    {
        path: 'report/:id/:subId',
        component: __WEBPACK_IMPORTED_MODULE_3__report_report_detail_component__["a" /* ReportDetailComponent */]
    },
    {
        path: 'query',
        component: __WEBPACK_IMPORTED_MODULE_4__query_query_component__["a" /* QueryComponent */]
    },
    {
        path: 'query/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__query_query_detail_component__["a" /* QueryDetailComponent */]
    },
    {
        path: 'process',
        component: __WEBPACK_IMPORTED_MODULE_6__process_process_component__["a" /* ProcessComponent */]
    },
    {
        path: 'faq',
        component: __WEBPACK_IMPORTED_MODULE_7__faq_faq_component__["a" /* FaqComponent */]
    },
    {
        path: 'faq/:page',
        component: __WEBPACK_IMPORTED_MODULE_7__faq_faq_component__["a" /* FaqComponent */]
    },
    {
        path: 'faq/:organNo/:seqNo',
        component: __WEBPACK_IMPORTED_MODULE_8__faq_faq_detail_component__["a" /* FaqDetailComponent */]
    },
    {
        path: 'feedback/:type',
        component: __WEBPACK_IMPORTED_MODULE_9__feedback_feedback_component__["a" /* FeedbackComponent */]
    },
    {
        path: 'term/:lable',
        component: __WEBPACK_IMPORTED_MODULE_10__term_term_component__["a" /* TermComponent */]
    },
    {
        path: 'Confirm',
        component: __WEBPACK_IMPORTED_MODULE_11__confirm_confirm_component__["a" /* ConfirmComponent */]
    },
    {
        path: 'Question',
        component: __WEBPACK_IMPORTED_MODULE_12__question_question_component__["a" /* QuestionComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__report_report_component__["a" /* ReportComponent */]
    }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\" style=\"height:100vh\">\n\n     <div class=\"pop\" style=\"display:block;\">\n        <div class=\"pop-content fat-content\">\n          <div class=\"check\">\n            <div class=\"check-panel\">\n              <div class=\"check-mark\"><i class=\"fa fa-check\"></i></div>\n              <h4 class=\"check-title navy text-center\">親愛的網友，您好！</h4>\n              <br>\n              <div *ngIf=\"!queryExist\">\n                <p>有事嗎？</p>\n              </div>\n              <div *ngIf=\"queryExist\">\n                <div class=\"check-info navy\" *ngIf=\"key === 'caseNo'\">\n                  <p class=\"text-center\">您已經確認過並且在辦理中<br>您的申報案號是</p>\n                  <h2 class=\"text-center\">{{val}}</h2>\n                </div>\n                <div class=\"check-info navy\" *ngIf=\"key === 'firstConfirm'\">\n                  已經確認成功！<br>系統後續將自動寄出案件編號至您的申報所填寫的信箱並立即進行分案處理。\n                </div>\n                <div class=\"check-info navy\" *ngIf=\"key === 'dateTime'\">\n                  <p>已經完成確認，第一次確認時間如下： </p>\n                  <h4>{{getdate()}}</h4>\n                </div>\n                <div class=\"check-info navy\" *ngIf=\"key === 'error'\">\n                  Sorry，確認案件失敗！<br>\n                  {{val}}\n                </div>\n                <br>\n                <br>\n              </div>\n\n              <h4 class=\"check-footer navy text-center\">高雄市政府市長信箱處理小組 敬上</h4>\n              <a href=\"./\" class=\"btn btn-green\" >我瞭解了</a>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = (function () {
    function ConfirmComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        // console.log(activatedRoute.queryParams['']);
        this.queryExist = true;
        this.timeFormate = 'YYYY MM DD hh:mm:ss';
    }
    ConfirmComponent.prototype.getdate = function () {
        var date = this.val.split('', 14);
        var year = date[0] + date[1] + date[2] + date[3] + '年', month = date[4] + date[5] + '月', day = date[6] + date[7] + '日 ', hour = date[8] + date[9] + '點', min = date[10] + date[11] + '分', sec = date[12] + date[13] + '秒';
        return year + month + day + hour + min + sec;
    };
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['FirstConfirm'] !== undefined) {
                _this.key = 'firstConfirm';
                _this.val = params['FirstConfirm'];
            }
            else if (params['DateTime'] !== undefined) {
                _this.key = 'dateTime';
                _this.val = params['DateTime'];
            }
            else if (params['CaseNo'] !== undefined) {
                _this.key = 'caseNo';
                _this.val = params['CaseNo'];
            }
            else if (params['Error'] !== undefined) {
                _this.key = 'error';
                _this.val = params['Error'];
            }
            else {
                _this.queryExist = false;
            }
        });
    };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-confirm',
        template: __webpack_require__("../../../../../src/app/confirm/confirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/confirm/confirm.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], ConfirmComponent);

var _a;
//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"reply\">\n    <div class=\"banner row\">\n        <div class=\"banner-page-name\">\n            <h2 class=\"dk-green\">常見問與答</h2>\n            <p class=\"dk-green\">Frequently Asked Questions</p>\n        </div>\n        <img src=\"./assets/images/banner/banner_pic_faq.png\" alt=\"\">\n    </div>\n    <div class=\"row\" *ngIf=\"reply\">\n        <div class=\"col-md-4 page-block maB2x\">\n            <div class=\"article-content\">\n                <p class=\"article-lable require\">問題內容</p>\n                <p class=\"navy maB2x\">{{reply.IssueContent}}</p>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <p class=\"article-lable require\">回覆單位 </p>\n                        <p class=\"navy maB2x pdLHalfX\">{{reply.ReplyOrganName}}</p>\n                        <p class=\"article-lable require\">張貼日期</p>\n                        <p class=\"navy maB2x pdLHalfX\">{{reply.PostDate}}</p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <p class=\"article-lable require\">問題類別</p>\n                        <p class=\"navy maB2x pdLHalfX\">{{reply.IssueKind}}</p>\n                        <p class=\"article-lable require\">修改日期</p>\n                        <p class=\"navy maB2x pdLHalfX\">{{reply.ReviseDate}}</p>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <p class=\"article-lable require\">人氣指數</p>\n                        <p class=\"navy maB2x pdLHalfX\">{{reply.ViewCount}}</p>\n                    </div>\n                    <div class=\"text-center col-md-12\">\n                        <a class=\"btn btn-green hidden-xs hidden-sm\" href=\"javascript:void(0);\" (click)=\"goBack()\">繼續查詢問題</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-8 page-block\">\n            <div class=\"article-content block-separate\">\n                <p class=\"article-lable require\">處理情形(答覆內容)</p>\n                <p class=\"navy maB2x\" style=\"white-space: pre-line;\">{{reply.ReplyContent}}</p>\n            </div>\n            <div class=\"text-center\">\n                <a class=\"btn btn-green hidden-md hidden-lg\" href=\"javascript:void(0);\" (click)=\"goBack()\">繼續查詢問題</a>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq__ = __webpack_require__("../../../../../src/app/faq/faq.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqDetailComponent = (function () {
    function FaqDetailComponent() {
        this.closeReply = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    FaqDetailComponent.prototype.goBack = function () {
        this.closeReply.emit();
    };
    return FaqDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__faq__["a" /* Reply */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__faq__["a" /* Reply */]) === "function" && _a || Object)
], FaqDetailComponent.prototype, "reply", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], FaqDetailComponent.prototype, "closeReply", void 0);
FaqDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-faq-detail',
        template: __webpack_require__("../../../../../src/app/faq/faq-detail.component.html"),
    }),
    __metadata("design:paramtypes", [])
], FaqDetailComponent);

var _a;
//# sourceMappingURL=faq-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!reply\">\n  <div class=\"banner row\">\n    <div class=\"banner-page-name\">\n      <h2 class=\"dk-green\">常見問與答</h2>\n      <p class=\"dk-green\">Frequently Asked Questions</p>\n    </div>\n    <img src=\"./assets/images/banner/banner_pic_faq.png\" alt=\"\">\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 pdLR1x maT1x\">\n      <a class=\"btn btn-green\" href=\"javascript:void(0);\" (click)=\"isSearch=!isSearch\"><i class=\"fa fa-search\"></i> 全文檢索</a>\n    </div>\n    <div class=\"col-md-12 maT1x\">\n      <div class=\"search \" [ngClass]=\"{active:isSearch}\">\n        <form action=\"\" class=\"\">\n          <div class=\"col-md-5 combine-icon combine-before \">\n              <i class=\"fa fa-search\"></i>\n              <input class=\"fall-width\" type=\"text\" [(ngModel)]=\"term\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"搜尋關鍵字\">\n          </div>\n          <div class=\"col-md-5 combine-icon combine-after\">\n                <input class=\"fall-width\" type=\"text\" [value]=\"selectedCategory.text\" readonly>\n                <select name=\"\" id=\"\" class=\"input-alpha\" (change)=\"changeCategory($event.target)\">\n                      <option value=\"\">請選擇處理單位</option>\n                      <option *ngFor=\"let category of categories\" [value]=\"category.kind\" >{{category.kind_name}}</option>\n                  </select>\n                <i class=\"fa fa-chevron-down\"></i>\n          </div>\n          <div class=\"col-md-2 maT1x\">\n              <button class=\"search-btn\" (click)=\"search()\">查詢</button>\n          </div>\n          <div class=\"clearfix\"></div>\n          <br>\n        </form>\n      </div>\n      <div class=\"article-content\">\n        <div class=\"faq row maB2x\">\n          <div class=\"faq-head col-md-12 hidden-xs hidden-sm\">\n            <div class=\"col-md-7\">問題內容</div>\n            <div class=\"col-md-2\">單位</div>\n            <div class=\"col-md-1\">人氣</div>\n            <div class=\"col-md-2\"></div>\n          </div>\n          <div class=\"faq-item col-md-12\" [ngClass]=\"{active:item.active}\" *ngFor=\"let item of faqs | slice: (page - 1) * pageSize: (page * pageSize - 1)\">\n            <div class=\"col-md-7 navy\">\n              <a href=\"javascript:void(0)\" (click)=\"getReply(item.OrganNo, item.SeqNo)\">{{item.CaseContent}}</a>\n              <span class=\"faq-open pull-right hidden-md hidden-lg\" (click)=\"item.active=!item.active\">\n                <i class=\"fa fa-plus\" [ngClass]=\"{active:item.active}\"></i>\n              </span>\n            </div>\n            <div class=\"col-md-2 text-black\">{{item.OrganName}}</div>\n            <div class=\"col-md-1 text-black\">{{item.ViewCount}}</div>\n            <div class=\"col-md-2 text-right\">\n              <a class=\"text-orange\" href=\"javascript:void(0)\" (click)=\"getReply(item.OrganNo, item.SeqNo)\">詳細問題內容\n                <i class=\"fa fa-angle-double-right\"></i>\n              </a>\n            </div>\n          </div>\n          <div class=\"faq-item col-md-12 navy\" *ngIf=\"faqs.length==0\">沒有符合的問題內容</div>\n        </div>\n        <div class=\"text-center\">\n          <ul class=\"page\">\n            <li class=\"page-first\" [ngClass]=\"{'page-alpha':page<=1}\">\n              <a *ngIf=\"page>1\" [routerLink]=\"['/faq', 1 ]\">\n                <i class=\"fa fa-angle-double-left fa-lg\" aria-hidden=\"true\" ></i>\n              </a>\n            </li>\n            <li class=\"page-prev\" [ngClass]=\"{'page-alpha':page<=1}\">\n              <a *ngIf=\"page>0\" [routerLink]=\"['/faq', page - 1]\">\n                <i class=\"fa fa-angle-left fa-lg\" aria-hidden=\"true\" ></i>\n              </a>\n            </li>\n            <li><a [routerLink]=\"['/faq', page ]\">{{ page }}</a></li>\n            <li class=\"page-next\" [ngClass]=\"{'page-alpha':page>=totalPage}\"><a [routerLink]=\"['/faq', page + 1]\"><i class=\"fa fa-angle-right fa-lg\" aria-hidden=\"true\" ></i></a></li>\n            <li class=\"page-final\" [ngClass]=\"{'page-alpha':page>=totalPage}\"><a [routerLink]=\"['/faq', totalPage]\"><i class=\"fa fa-angle-double-right fa-lg\" aria-hidden=\"true\" ></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-faq-detail *ngIf=\"reply\" [reply]=\"reply\" (closeReply)=\"closeReply()\"></app-faq-detail>\n\n<div *ngIf=\"faqs.length===0&&!isSearch\" class=\"pop\" style=\"display:block;\">\n  <div class=\"pop-content\">\n    <div class=\"mk-spinner-doublecircle\"></div>\n    <span class=\"loading-words\">Loading ...</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  display: inline-block;\n  padding-left: 0;\n  list-style: none;\n  clear: both; }\n  .page li {\n    float: left;\n    font-size: 1.125em;\n    padding: .5em .8em;\n    margin-right: 1px;\n    border: 1px solid transparent;\n    background: rgba(128, 203, 196, 0.8); }\n    .page li a {\n      color: white; }\n  .page .page-alpha {\n    position: relative;\n    opacity: 0;\n    width: 34.69px;\n    height: 39.75px; }\n    .page .page-alpha a {\n      cursor: initial; }\n    .page .page-alpha:before {\n      content: \"0\"; }\n    .page .page-alpha:after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      height: 100%;\n      width: 100%; }\n  .page .page-first,\n  .page .page-final {\n    margin: 0 .5em;\n    border: #80cbc4 1px solid;\n    background: white;\n    color: #54a2b2; }\n    .page .page-first a,\n    .page .page-final a {\n      color: #80cbc4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_service__ = __webpack_require__("../../../../../src/app/faq/faq.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqComponent = (function () {
    function FaqComponent(titleService, faqService, route) {
        this.titleService = titleService;
        this.faqService = faqService;
        this.route = route;
        this.isSearch = false;
        this.faqs = [];
        this.categories = [];
        this.selectedCategory = {
            value: '',
            text: '請選擇處理單位'
        };
        this.term = '';
        this.pageSize = 50;
        this.totalPage = 0;
    }
    FaqComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    FaqComponent.prototype.closeReply = function () {
        this.reply = null;
    };
    FaqComponent.prototype.getFaqs = function (q, kind) {
        var _this = this;
        if (q === void 0) { q = ''; }
        if (kind === void 0) { kind = ''; }
        this.faqService
            .getFaqs(q, kind)
            .subscribe(function (faq) {
            _this.faqs = faq,
                _this.totalPage = Math.floor(faq.length / _this.pageSize) + ((faq.length % _this.pageSize === 0) ? 0 : 1);
        }, function (error) { return _this.faqs = []; });
    };
    FaqComponent.prototype.getReply = function (organNo, seqNo) {
        var _this = this;
        this.faqService
            .getReply(organNo, seqNo)
            .subscribe(function (reply) { _this.reply = reply, window.scrollTo(0, 0); });
    };
    FaqComponent.prototype.getCategories = function () {
        var _this = this;
        this.faqService
            .getCategories()
            .subscribe(function (category) { return _this.categories = category; }, function (error) { return _this.error = error; });
    };
    FaqComponent.prototype.changeCategory = function (s) {
        this.selectedCategory.value = s.value;
        this.selectedCategory.text = s.options[s.selectedIndex].innerHTML;
    };
    FaqComponent.prototype.search = function () {
        this.getFaqs(this.term, this.selectedCategory.value);
        this.page = 1;
    };
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitle('常見問題 FAQ - 高雄市政府線上即時服務平台');
        this.getFaqs();
        this.getCategories();
        this.sub = this.route.params.subscribe(function (params) {
            if (params['page'] !== undefined) {
                _this.page = parseInt(params['page']);
                window.scrollTo(0, 0);
            }
        });
    };
    FaqComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-faq',
        template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */]],
        styles: [__webpack_require__("../../../../../src/app/faq/faq.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__faq_service__["a" /* FaqService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], FaqComponent);

var _a, _b, _c;
//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rxjs_operators__ = __webpack_require__("../../../../../src/app/shared/rxjs-operators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqService = (function () {
    function FaqService(http) {
        this.http = http;
        this.categoryUrl = 'https://soweb.kcg.gov.tw/webapi/api/category';
        this.faqUrl = 'https://soweb.kcg.gov.tw/webapi/api/faqqry/';
    }
    FaqService.prototype.getCategories = function () {
        return this.http.get(this.categoryUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FaqService.prototype.getFaqs = function (q, kind) {
        if (q === void 0) { q = ""; }
        if (kind === void 0) { kind = ""; }
        return this.http.get(this.faqUrl + q + '?kind=' + kind)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FaqService.prototype.getReply = function (organNo, seqNo) {
        var key = organNo + '-' + seqNo;
        var flag = sessionStorage.getItem(key) ? 'R' : 'N';
        sessionStorage.setItem(key, new Date().toString());
        return this.http.get(this.faqUrl + organNo + '?seqNo=' + seqNo + '&updFlag=' + flag)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FaqService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FaqService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return FaqService;
}());
FaqService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FaqService);

var _a;
//# sourceMappingURL=faq.service.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reply; });
/* unused harmony export Faq */
/* unused harmony export Category */
var Reply = (function () {
    function Reply() {
    }
    return Reply;
}());

var Faq = (function () {
    function Faq() {
    }
    return Faq;
}());

var Category = (function () {
    function Category() {
    }
    return Category;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ "../../../../../src/app/faq/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__faq_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq_detail_component__ = __webpack_require__("../../../../../src/app/faq/faq-detail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__faq_detail_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-set {\n    width: 100%;\n    font-size: 1.125em;\n    clear: both;\n}\n.chart-title {\n    position: relative;\n    float: left;\n    width: 32%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding: 5px 3% 5px 0;\n    text-align: right;\n}\n    .chart-title:after {\n        content: \"\";\n        position: absolute;\n        height: 100%;\n        width: 1px;\n        background: #999;\n        right: 0;\n        top: 0px;\n    }\n.chart-line {\n    width: 65%;\n    height: 1.25em;\n    float: left;\n    overflow: hidden;\n    background: #f9f9f9;\n    border-radius: 0 3px 3px 0;\n    margin: .3em 0;\n}\n.chart-range {\n    float: left;\n    width: 0;\n    height: 100%;\n    background:rgba(84,162,178,1);\n    transition: width .5s;\n    transition-delay: 1s;\n}\n.chart-num {\n    float: right;\n    font-size: 0.8em;\n    line-height: 1.55em;\n    padding-right: 5px;\n}\n.chart-info {\n    list-style: none;\n}\n.chart-info li {\n    display: inline-block;\n    padding: .3em; \n}\n.chart-info span {\n    display: inline-block;\n    width: .75em;\n    height: .75em;\n    margin-right: .3em;\n\n}\n.bg-green-darken {\n    background: #3C8F87;\n}\n.bg-green-lighten {\n    background: #4DB6AC;\n}\n.bg-green {\n    background: #80CBC4;\n}\n.bg-orange-lighten {\n    background: #F49A44;\n}\n.bg-orange-darken {\n    background: #EA7C13;\n}\n.bg-orange-darken-2 {\n    background: #C66B01;\n}\n.btn-reset {\n    margin-top: 45px;\n}\n\n@media screen and (min-width: 480px){\n    .chart-title {\n        max-width: 120px;\n    }\n}\n@media screen and (max-width: 768px){\n.btn-reset {\n        width: 100% !important;\n        margin-top: 15px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"banner row\">\n\t\t<div class=\"banner-page-name\">\n\t\t\t<h2 class=\"dk-green\">案件處理滿意度</h2>\n\t\t\t<p class=\"dk-green\">User Feedback</p>\n\t\t</div>\n\t\t<img src=\"./assets/images/banner/banner_pic_feedback.png\" alt=\"\">\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 page-block hidden-sm hidden-xs\">\n\t\t\t<p class=\"article-lable\">案件處理滿意指標 </p>\n\t\t\t<ul class=\"news-all\" id=\"anchorList\">\n\t\t\t\t<li><a routerLinkActive=\"active\" [routerLink]=\"['/feedback', 'point']\">各項滿意度指標</a></li>\n\t\t\t\t<li><a routerLinkActive=\"active\" [routerLink]=\"['/feedback', 'count']\">各問題次數分配表</a></li>\n\t\t\t\t<li><a routerLinkActive=\"active\" [routerLink]=\"['/feedback', 'effective']\">各問題有效值與遺漏值</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"col-md-9 page-block\">\n\t\t\t<p class=\"article-lable\">建議統計日期起迄不要超過一個月，以免執行時間過長影響其它作業</p>\n\t\t\t<div class=\"row block-separate\">\n\t\t\t\t<div class=\"col-md-4 maT1x\">\n\t\t\t\t\t<span>統計日期(來信日期)：</span>\n\t\t\t\t\t<input class=\"fall-width\" type=\"date\" [(ngModel)]=\"startDate\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 maT1x\">\n\t\t\t\t\t<span>迄日：</span>\n\t\t\t\t\t<input class=\"fall-width\" type=\"date\" [(ngModel)]=\"endDate\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;</span>\n\t\t\t\t\t<button class=\"btn btn-reset btn-orange maT2x\" type=\"button\" (click)=\"getFeedback(feedbackType)\">查詢</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t\t<p class=\"validation-info\"><br><br>{{ errorMsg }}</p>\n\t\t\t\n\t\t\t<div class=\"maB2x\" *ngFor=\"let sheet of feedbacks.Topic; let i = index \">\n\t\t\t\t<div class=\"article-content \">\n\t\t\t\t\t<p class=\"article-lable\">問卷版本:{{sheet.VersionNo}}　共 {{sheet.ReplyCount}} 筆</p>\n\t\t\t\t\t<div class=\"maB2x\" *ngFor=\"let item of feedbacks.Question\">\n\t\t\t\t\t\t<!-- point -->\n\t\t\t\t\t\t<div *ngIf=\"item.VersionNo === sheet.VersionNo && feedbackType === 'point'\">\n\t\t\t\t\t\t\t<p class=\"navy font-lg\">\n\t\t\t\t\t\t\t\t{{item.Question}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"chart\">\n\t\t\t\t\t\t\t\t<div class=\"chart-set\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-title\">{{item.ReplyItems[0].SatLvl1Reply}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-line\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-range bg-green-darken\" [ngStyle]=\"{'width':getNum(item.ReplyItems[0].SatLevel1)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-num\">{{getNum(item.ReplyItems[0].SatLevel1)}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"chart-set\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-title \">{{item.ReplyItems[1].SatLvl2Reply}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-line\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-range bg-green-lighten\" [ngStyle]=\"{'width':getNum(item.ReplyItems[1].SatLevel2)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-num\">{{getNum(item.ReplyItems[1].SatLevel2)}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"chart-set\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-title\">{{item.ReplyItems[2].SatLvl3Reply}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-line\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-range bg-green\" [ngStyle]=\"{'width':getNum(item.ReplyItems[2].SatLevel3)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-num\">{{getNum(item.ReplyItems[2].SatLevel3)}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"chart-set\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-title\">{{item.ReplyItems[3].SatLvl4Reply}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-line\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-range bg-orange-lighten\" [ngStyle]=\"{'width':getNum(item.ReplyItems[3].SatLevel4)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-num\">{{getNum(item.ReplyItems[3].SatLevel4)}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"chart-set\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-title\">{{item.ReplyItems[4].SatLvl5Reply}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-line\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-range bg-orange-darken\" [ngStyle]=\"{'width':getNum(item.ReplyItems[4].SatLevel5)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-num\">{{getNum(item.ReplyItems[4].SatLevel5)}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- count -->\n\t\t\t\t\t\t<div *ngIf=\"(item.VersionNo === sheet.VersionNo) && feedbackType === 'count'\">\n\t\t\t\t\t\t\t<p class=\"navy font-lg\">\n\t\t\t\t\t\t\t\t{{item.Question}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"chart-set\" *ngFor=\"let replys of item.ReplyItems; let i = index\">\n\t\t\t\t\t\t\t\t<div class=\"chart-title\">{{replys.ReplyItem}}</div>\n\t\t\t\t\t\t\t\t<div class=\"chart-line\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-range bg-green-darken\" [ngClass]=\"getChartColor(i)\" [ngStyle]=\"{'width':getNum(replys.Percentage)}\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-num\">{{getNum(replys.Percentage)}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<ul class=\"chart-info\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let replys of item.ReplyItems; let i = index\"><span [ngClass]=\"getChartColor(i)\"></span>{{replys.ReplyItem}}</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- effect -->\n\t\t\t\t\t\t<div *ngIf=\"(item.VersionNo === sheet.VersionNo) && feedbackType === 'effective'\">\n\t\t\t\t\t\t\t<p class=\"navy font-lg\">\n\t\t\t\t\t\t\t\t{{item.Question}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"chart\">\n\t\t\t\t\t\t\t\t<div class=\"chart-set\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-title\">有效值</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-line\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-range bg-green-lighten\" [ngStyle]=\"{'width':getNum(item.ValidPercent)}\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"chart-set\">\n\t\t\t\t\t\t\t\t\t<div class=\"chart-title\">遺漏值</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chart-line\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"chart-range bg-orange-lighten\" [ngStyle]=\"{'width':getNum(item.SkipPercent)}\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<ul class=\"chart-info\">\n\t\t\t\t\t\t\t\t<li><span class=\"bg-green-lighten\"></span>{{item.ValidCount}} ({{getNum(item.ValidPercent)}})</li>\n\t\t\t\t\t\t\t\t<li><span class=\"bg-orange-lighten\"></span>{{item.SkipCount}} ({{getNum(item.SkipPercent)}})</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div *ngIf=\"feedbacks==={}\" class=\"pop\" style=\"display:block;\">\n\t<div class=\"pop-content\">\n\t\t<div class=\"mk-spinner-doublecircle\"></div>\n\t\t<span class=\"loading-words\">Loading ...</span>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_service__ = __webpack_require__("../../../../../src/app/feedback/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackComponent = (function () {
    function FeedbackComponent(route, titleService, feedbackService) {
        this.route = route;
        this.titleService = titleService;
        this.feedbackService = feedbackService;
        this.feedbacks = {};
        this.isSearch = false;
        this.feedbackType = 'point';
    }
    FeedbackComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    FeedbackComponent.prototype.getPointFeedbacks = function () {
        var _this = this;
        this.feedbackType = 'point';
        this.feedbackService
            .getPointFeedback(__WEBPACK_IMPORTED_MODULE_4_moment__(this.startDate).format('YYYYMMDD'), __WEBPACK_IMPORTED_MODULE_4_moment__(this.endDate).format('YYYYMMDD'))
            .subscribe(function (feedbacks) { _this.feedbacks = feedbacks, _this.errorMsg = ''; }, function (error) { _this.feedbacks = {}, _this.errorMsg = error; });
    };
    FeedbackComponent.prototype.getCountFeedbacks = function () {
        var _this = this;
        this.feedbackType = 'count';
        this.feedbackService
            .getCountFeedback(__WEBPACK_IMPORTED_MODULE_4_moment__(this.startDate).format('YYYYMMDD'), __WEBPACK_IMPORTED_MODULE_4_moment__(this.endDate).format('YYYYMMDD'))
            .subscribe(function (feedbacks) { _this.feedbacks = feedbacks, _this.errorMsg = ''; }, function (error) { _this.feedbacks = {}, _this.errorMsg = error; });
    };
    FeedbackComponent.prototype.getEffectiveFeedbacks = function () {
        var _this = this;
        this.feedbackType = 'effective';
        this.feedbackService
            .getEffectiveFeedback(__WEBPACK_IMPORTED_MODULE_4_moment__(this.startDate).format('YYYYMMDD'), __WEBPACK_IMPORTED_MODULE_4_moment__(this.endDate).format('YYYYMMDD'))
            .subscribe(function (feedbacks) { _this.feedbacks = feedbacks, _this.errorMsg = ''; }, function (error) { _this.feedbacks = {}, _this.errorMsg = error; });
    };
    FeedbackComponent.prototype.getFeedback = function (type) {
        this.feedbacks = {};
        switch (type) {
            case 'effective':
                this.getEffectiveFeedbacks();
                break;
            case 'count':
                this.getCountFeedbacks();
                break;
            case 'point':
            default:
                this.getPointFeedbacks();
                break;
        }
    };
    FeedbackComponent.prototype.getNum = function (val) {
        return Math.round(val * 100) / 100 + "%";
    };
    FeedbackComponent.prototype.getChartColor = function (idx) {
        var bg;
        switch (idx) {
            case 0:
                bg = 'bg-green-darken';
                break;
            case 1:
                bg = 'bg-green-lighten';
                break;
            case 2:
                bg = 'bg-green';
                break;
            case 3:
                bg = 'bg-orange-lighten';
                break;
            case 4:
                bg = 'bg-orange-darken';
                break;
            case 5:
                bg = 'bg-orange-darken-2';
                break;
        }
        return bg;
    };
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbacks = {};
        this.startDate = __WEBPACK_IMPORTED_MODULE_4_moment__().add(-1, 'M').startOf('month').format('YYYY-MM-DD');
        this.endDate = __WEBPACK_IMPORTED_MODULE_4_moment__().add(-1, 'M').endOf('month').format('YYYY-MM-DD');
        this.sub = this.route.params.subscribe(function (params) {
            if (params['type'] !== undefined) {
                _this.getFeedback(params['type']);
                window.scrollTo(0, 0);
            }
        });
        this.setTitle('案件處理滿意度 - 高雄市政府線上即時服務平台');
    };
    return FeedbackComponent;
}());
FeedbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-feedback',
        template: __webpack_require__("../../../../../src/app/feedback/feedback.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__feedback_service__["a" /* FeedbackService */]],
        styles: [__webpack_require__("../../../../../src/app/feedback/feedback.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__feedback_service__["a" /* FeedbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__feedback_service__["a" /* FeedbackService */]) === "function" && _c || Object])
], FeedbackComponent);

var _a, _b, _c;
//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rxjs_operators__ = __webpack_require__("../../../../../src/app/shared/rxjs-operators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackService = (function () {
    function FeedbackService(http) {
        this.http = http;
        this.mock = false;
        this.pointFeedbackUrl = this.mock ? 'assets/pointFeedback.json' : 'https://soweb.kcg.gov.tw/webapi/api/satPool/1';
        this.countFeedbackUrl = this.mock ? 'assets/countFeedback.json' : 'https://soweb.kcg.gov.tw/webapi/api/satPool/2';
        this.effectiveFeedbackUrl = this.mock ? 'assets/effectiveFeedback.json' : 'https://soweb.kcg.gov.tw/webapi/api/satPool/3';
    }
    FeedbackService.prototype.getPointFeedback = function (startDate, endDate) {
        return this.http.get(this.pointFeedbackUrl + '?qBegDate=' + startDate + '&qEndDate=' + endDate)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FeedbackService.prototype.getCountFeedback = function (startDate, endDate) {
        return this.http.get(this.countFeedbackUrl + '?qBegDate=' + startDate + '&qEndDate=' + endDate)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FeedbackService.prototype.getEffectiveFeedback = function (startDate, endDate) {
        return this.http.get(this.effectiveFeedbackUrl + '?qBegDate=' + startDate + '&qEndDate=' + endDate)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FeedbackService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FeedbackService.prototype.handleError = function (error) {
        var errMsg = error.status == 500 ? "目前無法提供查詢資料。" : error.json().Message;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return FeedbackService;
}());
FeedbackService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FeedbackService);

var _a;
//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"banner row\">\n\t\t<div class=\"banner-page-name\">\n\t\t\t<h2 class=\"dk-green\">最新訊息</h2>\n\t\t\t<p class=\"dk-green\">Latest News</p>\n\t\t</div>\n\t\t<img src=\"./assets/images/banner/banner_pic_news.png\" alt=\"\">\n\t</div>\n\t<div class=\"row\" style=\"min-height:300px\">\n\t\t<div class=\"col-md-8 page-block\">\n\t\t\t<div class=\"article-content\">\n\t\t\t\t<p class=\"article-lable\">主題</p>\n\t\t\t\t<p class=\"navy maB2x\">\n\t\t\t\t\t{{newsDetail.MsgTitle}}\n\t\t\t\t</p>\n\t\t\t\t<p class=\"article-lable\">內容</p>\n\t\t\t\t<p class=\"navy maB2x\" style=\"white-space: pre;\">{{newsDetail.MsgContent}}</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4 page-block info-separate\">\n\t\t\t<div class=\"article-content block-separate\">\n\t\t\t\t<p class=\"article-lable\">其他訊息</p>\n\t\t\t\t<ul class=\"news-all\">\n\t\t\t\t\t<li *ngFor=\"let newsItem of news\">\n            <a routerLinkActive=\"active\" [routerLink]=\"['/news', newsItem.MsgID]\">{{newsItem.MsgTitle}}</a>\n          </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_service__ = __webpack_require__("../../../../../src/app/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news__ = __webpack_require__("../../../../../src/app/news/news.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsComponent = (function () {
    function NewsComponent(route, titleService, newsService) {
        this.route = route;
        this.titleService = titleService;
        this.newsService = newsService;
        this.news = [];
        this.newsDetail = new __WEBPACK_IMPORTED_MODULE_4__news__["a" /* News */]();
    }
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService
            .getNews()
            .subscribe(function (news) { return _this.news = news; });
    };
    NewsComponent.prototype.getNewsById = function (id) {
        var _this = this;
        this.newsService
            .getNewsById(id)
            .subscribe(function (news) { return _this.newsDetail = news; });
    };
    NewsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                _this.getNewsById(params['id']);
                window.scrollTo(0, 0);
            }
        });
        this.getNews();
        this.setTitle('最新訊息 - 高雄市政府線上即時服務平台');
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-service',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__news_service__["a" /* NewsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__news_service__["a" /* NewsService */]) === "function" && _c || Object])
], NewsComponent);

var _a, _b, _c;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rxjs_operators__ = __webpack_require__("../../../../../src/app/shared/rxjs-operators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.newsListUrl = 'https://soweb.kcg.gov.tw/webapi/api/bulletin';
    }
    NewsService.prototype.getNews = function () {
        return this.http.get(this.newsListUrl)
            .map(function (res) { return res.json() || []; })
            .catch(this.handleError);
    };
    NewsService.prototype.getNewsById = function (id) {
        return this.http.get(this.newsListUrl + "/" + id)
            .map(function (res) { return res.json()[0] || {}; })
            .catch(this.handleError);
    };
    NewsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return NewsService;
}());
NewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NewsService);

var _a;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News() {
    }
    return News;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ "../../../../../src/app/process/process.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"banner row\">\n        <div class=\"banner-page-name\">\n            <h2 class=\"dk-green\">服務流程</h2>\n            <p class=\"dk-green\">Service Process</p>\n        </div>\n        <img src=\"./assets/images/banner/banner_pic_process.png\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4 page-block maB2x\">\n\n            <img src=\"./assets/images/process/process.png\" width=\"100%\" alt=\"\">\n        </div>\n        <div class=\"col-md-8 page-block\">\n\n            <div class=\"article-content block-separate\">\n                <p class=\"article-lable\">線上即時服務系統作業方式</p>\n\n                <ol class=\"navy maB2x maL-1x\">\n                    <li>請您於投書時提供正確之E-MAIL帳號、電話、姓名，俾系統自動回覆您信件收件編號及回覆內容亦將以E-MAIL的方式傳送給您。</li>\n                    <li>查詢回覆內容時，請您透過系統自動提供之收件編號及姓名（或e-mail），於「即時服務案件查詢」選擇鍵中進行查閱。</li>\n                    <li>案件之處理依「行政院暨所屬各機關處理人民陳情案件要點」辦理，當您收到相關單位的處理結果後，還可經由滿意度問卷調查填寫對該項回函處理的滿意程度，歡迎您多加利用。</li>\n                </ol>\n                <p class=\"article-lable\">未確認函之處理</p>\n                <p class=\"navy maB2x\">\n                    本府為避免所處理的信件無法傳送當事人，甚或信箱遭冒用之情形，將會在受理分案後回傳收件編號後分派至相關機關處理，若您一直無法收到收件編號函，可能是您填寫的電子信箱有誤，建議您重新檢視並再次傳送。\n                </p>\n                <p class=\"article-lable\">流程圖說明</p>\n                <p class=\"navy maB2x\">\n                    步驟一、陳情民眾於市長信箱系統填入正確資料後等待確認郵件。<br>\n                    步驟二、點選確認郵件後，會依照項目別分別採取自動分案或人工線上分案，分案給承辦單位。<br>\n                    步驟三、承辦單位於處理後，系統將寄出處理情形通知陳情民眾，若因時效內無法完成，亦會寄出展期信件通知陳情民眾。<br>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/process/process.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessComponent = (function () {
    function ProcessComponent(titleService) {
        this.titleService = titleService;
    }
    ProcessComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ProcessComponent.prototype.ngOnInit = function () {
        this.setTitle('服務流程 - 高雄市政府線上即時服務平台');
        window.scrollTo(0, 0);
    };
    return ProcessComponent;
}());
ProcessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-process',
        template: __webpack_require__("../../../../../src/app/process/process.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], ProcessComponent);

var _a;
//# sourceMappingURL=process.component.js.map

/***/ }),

/***/ "../../../../../src/app/query/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_component__ = __webpack_require__("../../../../../src/app/query/query.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__query_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_detail_component__ = __webpack_require__("../../../../../src/app/query/query-detail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__query_detail_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/query/query-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"banner row\">\n        <div class=\"banner-page-name\">\n            <h2 class=\"dk-green\">案件查詢</h2>\n            <p class=\"dk-green\">Search Case</p>\n        </div>\n        <img src=\"./assets/images/banner/banner_pic_query.png\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4 page-block maB2x\">\n\n            <div class=\"article-content\">\n                <p class=\"article-lable require\" *ngIf=\"searchCase.Content[0].Source === '0'\">主旨</p>\n                <p class=\"navy maB2x\" *ngIf=\"searchCase.Content[0].Source !== '0'\">{{searchCase.Content[0].e_subject}}</p>\n                <p class=\"article-lable require\">建議事項</p>\n                <p class=\"navy maB2x\">{{searchCase.Content[0].subject}}</p>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <p class=\"article-lable require\">收件編號</p>\n                        <p class=\"navy maB2x pdLHalfX\">\n                          <span *ngIf=\"searchCase.Content[0].source_id === '0'\">\n                            {{searchCase.Content[0].case_no1+'-'+searchCase.Content[0].case_no4}}\n                          </span>\n                          <span *ngIf=\"searchCase.Content[0].source_id === '1'\">\n                            {{searchCase.Content[0].case_no1+'-'+searchCase.Content[0].case_no2+'-'+searchCase.Content[0].case_no3+'-'+searchCase.Content[0].case_no4}}\n                          </span>\n                          </p>\n                        <p class=\"article-lable require\">來源別</p>\n                        <p class=\"navy maB2x pdLHalfX\">{{searchCase.Content[0].Source}}</p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <p class=\"article-lable require\">時間</p>\n                        <p class=\"navy maB2x pdLHalfX\">\n                          <span *ngIf=\"searchCase.Content[0].source_id === '1'\">\n                            {{searchCase.Content[0].subj_date}}\n                          </span>\n                          <span *ngIf=\"searchCase.Content[0].source_id === '0'\">\n                            {{searchCase.Content[0].subj_time}}\n                          </span>\n                        </p>\n                        <p class=\"article-lable require\">機密等級</p>\n                        <p class=\"navy maB2x pdLHalfX\">{{searchCase.Content[0].Security}}</p>\n                    </div>\n                </div>\n                <div *ngIf=\"searchCase.Content[0].Atth_FileNames && searchCase.Content[0].Atth_FileNames.length > 0\">\n                  <p class=\"article-lable require\">附加檔案 </p>\n                  <p class=\"navy maB2x pdLHalfX\">\n                    <listgroup *ngFor=\"let item of searchCase.Content[0].Atth_FileNames\">\n                      <a class=\"word-break\" target=\"_blank\" href=\"/webapi/api/attachfile/1?fileName={{item.FileName}}&caseNo={{searchCase.Content[0].case_no1}}-{{searchCase.Content[0].case_no2}}-{{searchCase.Content[0].case_no3}}-{{searchCase.Content[0].case_no4}}&suggName={{searchCase.Content[0].sugg_name}}\">\n                        <i class=\"fa fa-paperclip\"></i>&nbsp;{{item.FileName}}\n                      </a><br/>\n                    </listgroup>\n                  </p>\n                </div>\n                <div class=\"row text-center\">\n                  <a class=\"btn btn-green hidden-xs hidden-sm\" href=\"javascript:void(0);\" (click)=\"goBack()\">繼續查詢陳報案件</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-8 page-block\">\n            <div class=\"article-content block-separate\" *ngIf=\"searchCase.ProcessStatus.length !== 0\">\n                <div *ngFor=\"let item of searchCase.ProcessStatus\" aria-describedby=\"searchCase.ProcessStatus\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <p class=\"article-lable require\">陳情類別(主項)</p>\n                      <p class=\"navy maB2x pdLHalfX\">{{item.item_name}}</p>\n                      <p class=\"article-lable require\">承辦機關</p>\n                      <p class=\"navy maB2x pdLHalfX\">{{item.organ_name}}</p>\n                      <p class=\"article-lable require\">序號</p>\n                      <p class=\"navy maB2x pdLHalfX\">{{item.seq_no}}</p>\n                      <p class=\"article-lable require\">承辦人</p>\n                      <p class=\"navy maB2x pdLHalfX\">{{item.undertaker}}</p>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <p class=\"article-lable require\">陳情類別(子項)</p>\n                      <p class=\"navy maB2x pdLHalfX\">{{item.sub_itemname}}</p>\n                      <p class=\"article-lable require\">科室</p>\n                      <p class=\"navy maB2x pdLHalfX\">{{item.dept_name}}</p>\n                      <p class=\"article-lable require\">完成日期 </p>\n                      <p class=\"navy maB2x pdLHalfX\">{{item.FinishDate}}</p>\n                      <p class=\"article-lable require\">承辦人電話</p>\n                      <p class=\"navy maB2x pdLHalfX\">{{item.proc_telno}}</p>\n                    </div>\n                  </div>\n                  <p class=\"article-lable require\" *ngIf=\"item.Reply\">處理情形(答覆內容)</p>\n                  <p class=\"navy maB2x\" style=\"white-space: pre-line;\" *ngIf=\"item.Reply\">{{ item.Reply }}</p>\n                  <div *ngIf=\"item.Atth_FileNames && item.Atth_FileNames.length !== 0\">\n                    <p class=\"article-lable require\">附加檔案 </p>\n                    <p class=\"navy maB2x pdLHalfX\">\n                      <a target=\"_blank\" *ngFor=\"let file of item.Atth_FileNames\"\n                      href=\"https://soweb.kcg.gov.tw/webapi/api/attachfile/{{file.SerialNo}}?fileName={{file.FileName}}&caseNo={{searchCase.Content[0].case_no1}}-{{searchCase.Content[0].case_no2}}-{{searchCase.Content[0].case_no3}}-{{searchCase.Content[0].case_no4}}&suggName={{searchCase.Content[0].sugg_name}}&organNo={{item.org_no}}&seqNo={{item.seq_no}}&sNo={{item.s_no}}\">\n                        <i class=\"fa fa-paperclip\"></i>&nbsp;{{file.FileName}}\n                      </a>\n                    </p>\n                  </div>\n                  <hr/>\n                </div>\n            </div>\n            <div class=\"article-content block-separate\" *ngIf=\"searchCase.ProcessStatus.length === 0\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  親愛的網友，您好！\n                  <br>\n                  目前您的申報案件正在分案中。\n                  <br/>\n                </div>\n              </div>\n            </div>\n            <a class=\"btn btn-green hidden-lg hidden-md\" href=\"javascript:void(0);\" (click)=\"goBack()\">繼續查詢陳報案件</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/query/query-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_case__ = __webpack_require__("../../../../../src/app/shared/case.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryDetailComponent = (function () {
    function QueryDetailComponent(titleService) {
        this.titleService = titleService;
        this.closeDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    QueryDetailComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    QueryDetailComponent.prototype.ngOnInit = function () {
        this.setTitle('案件明細 - 高雄市政府線上即時服務平台');
        window.scrollTo(0, 0);
    };
    QueryDetailComponent.prototype.gotoquery = function () {
        window.location.reload();
    };
    QueryDetailComponent.prototype.goBack = function () {
        this.closeDetail.emit();
    };
    return QueryDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_case__["a" /* Case */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_case__["a" /* Case */]) === "function" && _a || Object)
], QueryDetailComponent.prototype, "searchCase", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Boolean)
], QueryDetailComponent.prototype, "isMayorMail", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], QueryDetailComponent.prototype, "closeDetail", void 0);
QueryDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-query-detail',
        template: __webpack_require__("../../../../../src/app/query/query-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], QueryDetailComponent);

var _a, _b;
//# sourceMappingURL=query-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/query/query.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!displayDetail\">\n    <div class=\"banner row\">\n        <div class=\"banner-page-name\">\n            <h2 class=\"dk-green\">案件查詢</h2>\n            <p class=\"dk-green\">Search Case</p>\n        </div>\n        <img src=\"./assets/images/banner/banner_pic_query.png\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4 page-block\">\n            <div class=\"article-header text-center\">\n                <h4 id=\"mayor_describe\" class=\"article-title\">操作說明</h4>\n            </div>\n            <div class=\"article-content\">\n                <p class=\"article-lable require\">查詢方式 </p>\n                <p class=\"navy maB1x\">\n                    請先點選您要查詢的方式，再輸入相關查詢條件。\n                </p>\n                <p class=\"article-lable require\">注意事項 </p>\n                <p class=\"navy\">\n                    請注意您輸入的內容(Email、姓名)須與當時反映時所提供之資料一致，俾利系統正確判讀。<br> 限查詢現有資料庫期限內案件。\n                    <br> 當系統處於定期維護時間每日凌晨01:00~02:00時，主機可能會停止所有服務，如有不便還請見諒。\n                    <br> 為加強民眾投訴案件資料之安全，即日起不提供市長信箱查詢案件(案件編號+姓名)與人民陳情案件(姓名+電話)兩種查詢方式，如有不便還請見諒。\n                    <br>\n                </p>\n            </div>\n        </div>\n        <div class=\"col-md-4 page-block\">\n            <div class=\"article-header text-center\">\n                <h4 id=\"mayor_mailbox\" class=\"article-title\">市長信箱</h4>\n            </div>\n            <div class=\"article-content block-separate\">\n                <p class=\"navy\">透過線上即時服系統及市長信箱等網路途徑<br><br><br></p>\n                <div>\n                    <p class=\"article-lable require\">案件編號 </p>\n                    <div class=\"row maB1x\">\n                        <div class=\"col-xs-2 input-separate\"><input class=\"col-xs-12 text-center\" type=\"text\" value=\"B\" readonly></div>\n                        <div class=\"col-xs-10\"><input class=\"col-xs-12\" tabindex=\"1\" type=\"text\" [(ngModel)]=\"caseNo\"></div>\n                    </div>\n                    <p class=\"article-lable require\">E-Mail </p>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\"><input class=\"col-xs-12\" tabindex=\"2\" type=\"text\" placeholder=\"example@kcg.gov.tw\" [(ngModel)]=\"email\"></div>\n                        <p class=\"col-xs-12 validation-info\"> {{queryBErr}}</p>\n                    </div>\n                    <br>\n                    <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4 text-center\"><img style=\"width:100%\" [src]=\"recaptchaImg\" alt=\"驗證碼\" title=\"點擊可重新產生驗證碼\" (click)=\"getValidation()\"></div>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<input class=\"fall-width text-center\" type=\"text\" [(ngModel)]=\"bCapcha\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"請輸入驗證碼\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 text-center\">\n\t\t\t\t\t\t\t驗證碼不區分大小寫。 <a href=\"javascript:void(0);\" class=\"text-orange\" (click)=\"getValidation()\">重新產生驗證碼？</a>\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                    <div class=\"row text-center maT2x\">\n                      <a href=\"javascript:void(0);\" tabindex=\"3\"  class=\"btn btn-orange\" (click)=\"queryB()\">查詢</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 page-block\">\n            <div class=\"article-header text-center\">\n                <h4 id=\"mayor\" class=\"article-title\">人民陳情案件</h4>\n            </div>\n            <div class=\"article-content block-separate\">\n                <p class=\"navy\">透案件來源：透過電話、信件、傳真等非網路途徑<br><br></p>\n                <p class=\"article-lable require\">案件編號 </p>\n                <div class=\"row maB1x\">\n                  <div class=\"col-xs-2 input-separate\"><input class=\"col-xs-12 text-center\" tabindex=\"4\" type=\"text\" value=\"A\" [(ngModel)]=\"vp0\"></div>\n                  <div class=\"col-xs-2 input-separate\"><input class=\"col-xs-12 text-center\" tabindex=\"5\" type=\"text\" value=\"TB\" [(ngModel)]=\"vp1\"></div>\n                  <div class=\"col-xs-3 input-separate\"><input class=\"col-xs-12 text-center\" tabindex=\"6\" type=\"text\" [(ngModel)]=\"vyear\"></div>\n                  <div class=\"col-xs-5\"><input class=\"col-xs-12\" tabindex=\"7\" type=\"text\" [(ngModel)]=\"vp3\"></div>\n                </div>\n                <p class=\"article-lable require\">來電時的姓名 </p>\n                <div class=\"row\">\n                  <div class=\"col-xs-12\"><input class=\"col-xs-12\" tabindex=\"8\" type=\"text\" placeholder=\"您的姓名\" [(ngModel)]=\"callerName\"></div>\n                  <p class=\"col-xs-12 validation-info\"> {{queryVErr}}</p>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-4 text-center\"><img style=\"width:100%\" [src]=\"recaptchaImg2\" alt=\"驗證碼\" title=\"點擊可重新產生驗證碼\" (click)=\"getValidation2()\"></div>\n                    <div class=\"col-md-8\">\n                        <input class=\"fall-width text-center\" type=\"text\" [(ngModel)]=\"aCapcha\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"請輸入驗證碼\">\n                    </div>\n                    <div class=\"col-md-12 text-center\">\n                        驗證碼不區分大小寫。 <a href=\"javascript:void(0);\" class=\"text-orange\" (click)=\"getValidation2()\">重新產生驗證碼？</a>\t\t\t\t\t\t\n                    </div>\n                </div>\n                <div class=\"row text-center maT2x\">\n                  <a class=\"btn btn-orange\" tabindex=\"9\" (click)=\"queryV()\">查詢</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"displayDetail && searchCase != null\" >\n  <app-query-detail [searchCase]=\"searchCase\" (closeDetail)=\"closeDetail()\"></app-query-detail>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/query/query.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__query_service__ = __webpack_require__("../../../../../src/app/query/query.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryComponent = (function () {
    function QueryComponent(titleService, qService) {
        this.titleService = titleService;
        this.qService = qService;
        this.subscriptions = [];
        this.errType = {
            notFound: '您查詢的內容不存在，請重新輸入。',
            numErr: '案件編號欄位為必填',
            mailErr: '查詢email有誤。請重新輸入。',
            yearErr: '案件編號-年份有誤。請重新輸入。',
            keyErr: '案件編號有誤。請重新輸入。',
            nameErr: '來電時的姓名有誤。請重新輸入。'
        };
        this.displayDetail = false;
        this.caseNo = '';
        this.email = ''; // 市長信箱 Email
        this.vp0 = 'A';
        this.vp1 = 'TB';
        this.vyear = new Date().getFullYear(); //as p2
        this.validateTime = 9 * 60 * 1000;
        this.callerName = ''; // 人民陳情 來電時的姓名
        //
    }
    QueryComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    QueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitle('案件查詢 - 高雄市政府線上即時服務平台');
        window.scrollTo(0, 0);
        this.getValidation();
        setTimeout(function () { _this.getValidation2(); }, 500);
        setInterval(function () { _this.getValidation(); }, this.validateTime);
        setInterval(function () { _this.getValidation2(); }, this.validateTime + 500);
    };
    QueryComponent.prototype.closeDetail = function () {
        this.displayDetail = false;
        this.searchCase = null;
        this.caseNo = "";
        this.email = "";
        this.bCapcha = "";
        this.vp3 = "";
        this.callerName = "";
        this.aCapcha = "";
    };
    QueryComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    QueryComponent.prototype.getValidation = function () {
        var _this = this;
        this.qService
            .getValidationCode()
            .subscribe(function (recaptcha) {
            _this.recaptchaCode = recaptcha,
                _this.recaptchaImg = "data:image/gif;base64," + recaptcha.ValidationCode;
        });
    };
    QueryComponent.prototype.getValidation2 = function () {
        var _this = this;
        this.qService
            .getValidationCode()
            .subscribe(function (recaptcha) {
            _this.recaptchaCode2 = recaptcha,
                _this.recaptchaImg2 = "data:image/gif;base64," + recaptcha.ValidationCode;
        });
    };
    QueryComponent.prototype.queryB = function () {
        var _this = this;
        this.queryVErr = "";
        if (!this.validateCaseNo(this.caseNo)) {
            return this.queryBErr = this.errType.numErr;
        }
        if (!this.validateEmail(this.email)) {
            return this.queryBErr = this.errType.mailErr;
        }
        this.subscriptions.push(this.qService.getBResult(this.caseNo, this.email, this.recaptchaCode.TimeStamp + this.bCapcha + encodeURIComponent(this.recaptchaCode.HashCode)).subscribe(function (data) {
            _this.searchCase = data;
            //console.log(data);
            _this.displayDetail = true;
            _this.isMayorMail = true;
            _this.searchCase.isMayorMail = true;
        }, function (err) {
            //console.log(err);
            if (err.status == 404) {
                return _this.queryBErr = _this.errType.notFound;
            }
            else if (err.status == 400) {
                return _this.queryBErr = err.json();
            }
        }));
    };
    QueryComponent.prototype.validateCaseNo = function (caseNo) {
        // 改驗證該欄位為必填
        return caseNo !== '';
    };
    QueryComponent.prototype.validateEmail = function (email) {
        var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regx.test(email);
    };
    QueryComponent.prototype.queryV = function () {
        var _this = this;
        //
        this.queryVErr = "請稍候正在查詢中...";
        if (this.vyear == null || this.vyear.toString().length < 4) {
            return this.queryVErr = this.errType.yearErr;
        }
        if (this.vp3 == null || this.vp3.length == 0) {
            return this.queryVErr = this.errType.keyErr;
        }
        if (this.callerName == null || this.callerName.length == 0) {
            return this.queryVErr = this.errType.nameErr;
        }
        this.subscriptions.push(
        //this.vp1 = 'AK';
        this.qService.getVResult(this.vp0, this.vp1, this.vyear, this.vp3, this.callerName, this.recaptchaCode2.TimeStamp + this.aCapcha + encodeURIComponent(this.recaptchaCode2.HashCode)).subscribe(function (data) {
            _this.searchCase = data;
            //console.log(data);
            _this.displayDetail = true;
            _this.isCivilianSuggest = true;
            _this.searchCase.isCivilianSuggest = true;
        }, function (err) {
            if (err.status == 404) {
                return _this.queryVErr = _this.errType.notFound;
            }
            else if (err.status == 400) {
                return _this.queryVErr = err.json();
            }
        }));
    };
    return QueryComponent;
}());
QueryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-query',
        template: __webpack_require__("../../../../../src/app/query/query.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__query_service__["a" /* QueryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__query_service__["a" /* QueryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__query_service__["a" /* QueryService */]) === "function" && _b || Object])
], QueryComponent);

var _a, _b;
//# sourceMappingURL=query.component.js.map

/***/ }),

/***/ "../../../../../src/app/query/query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mattyyzac on 2016/9/6.
 */




var QueryService = (function () {
    function QueryService(_http) {
        this._http = _http;
        this._base_api_url = 'https://soweb.kcg.gov.tw/webapi/api/case/';
        this.validationCodeUrl = 'https://soweb.kcg.gov.tw/webapi/api/ValidationCode/'; //'../../assets/vd.json';
        //
    }
    //市長信箱
    QueryService.prototype.getBResult = function (p1, p2, p3) {
        return this._http.get(this._base_api_url + 'B?p1=' + p1 + '&p2=' + p2 + '&p3=' + p3)
            .map(function (resp) { return resp.json(); });
    };
    //人民陳情
    QueryService.prototype.getVResult = function (p0, p1, p2, p3, p4, p5) {
        return this._http.get(this._base_api_url + p0 + '?p1=' + p1 + '&p2=' + p2 + '&p3=' + p3 + '&p4=' + p4 + '&p5=' + p5)
            .map(function (resp) { return resp.json(); });
    };
    QueryService.prototype.getValidationCode = function () {
        return this._http.get(this.validationCodeUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QueryService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return QueryService;
}());
QueryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QueryService);

var _a;
//# sourceMappingURL=query.service.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <form #f=\"ngForm\" action=\"\" *ngIf=\"poll\">\n    <div class=\"banner row\">\n      <div class=\"banner-page-name\">\n        <h2 class=\"dk-green\">{{qusTitle.Title}}</h2>\n        <p class=\"dk-green\">KCG.GOV.TW Feedback Poll</p>\n      </div>\n      <img src=\"./assets/images/banner/banner_pic_faq.png\" alt=\"\">\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n      <pre>{{question[2].QNA |json}}</pre>\n\n        <header>\n          <h3></h3>\n          <p class=\"foreword\" [innerHTML]=\"qusTitle.Foreword\"></p>\n        </header>\n\n      </div>\n      <div class=\"col-md-8\">\n\n        <div class=\"topics\" *ngFor=\"let t of question\">\n          <h3 class=\"topic-title\">第{{t.TopicID}}部分-{{t.Topic}}</h3>\n          <ul class=\"topic-list\">\n            <li class=\"question\" *ngFor=\"let q of t.QnR; let i = index\">\n              <h5 class=\"question-title\">{{t.TopicID}}-{{i+1}}.{{q.Question}}</h5>\n              <div class=\"question-content\">\n                <div *ngFor=\"let r of q.ReplyItems; let k = index\" >\n                    <!-- lv0 -->\n                    <label>\n                      <input [type]=\"getInputType(r.ReplyType)\" [name]=\"'lv0'+t.TopicID+q.QuestionNo+r.ReplyID\" (change)=\"setSelect(q,'ReplyItems',k,r.ReplyType)\"> <span [innerHTML]=\"r.ReplyItem\"></span>\n                    </label>\n                    <input *ngIf=\"getTextFeild(r.ReplyType)\" type=\"text\" [name]=\"'lv0T'+t.TopicID+q.QuestionNo+r.ReplyID\" (keyup)=\"setCommnet($event.target,'ReplyItems',q,k)\">\n                    <!-- lv1 -->\n                    <div *ngIf=\"r.ItemOptions\" style=\"margin-left: 20px;\">\n                      <p *ngFor=\"let or of r.ItemOptions; let o = index\" >\n                        <label>\n                          <input [type]=\"getInputType(or.ReplyType)\" [name]=\"'lv1'+t.TopicID+r.ReplyID+or.ReplyID\" (change)=\"setSelect(r,'ItemOptions',o,or.ReplyType)\"> <span [innerHTML]=\"or.ReplyItem\"></span>\n                        </label>\n                        <input *ngIf=\"getTextFeild(or.ReplyType)\" type=\"text\" [name]=\"'lv0T'+t.TopicID+r.ReplyID+or.ReplyID\" (keyup)=\"setCommnet($event.target,'Lvl1ItemOptions',r,o)\">\n                      </p>\n                    </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n              <input type=\"submit\" class=\"btn btn-orange fall-width\" value=\"填寫完成 \" (click)=\"getAns()\" />\n            </div>\n            <div class=\"col-md-6\"></div>\n        </div>\n\n      </div>\n    </div>\n    <pre>\n      {{ question.QNA | json}}\n    </pre>\n</form>\n</div>\n<div class=\"pop\" style=\"display:block;\" *ngIf=\"getReportDone\">\n\t<div class=\"pop-content\">\n\t\t<div class=\"check\">\n\t\t\t<div class=\"check-panel\">\n\t\t\t\t<div class=\"check-mark\"><i class=\"fa fa-check\"></i></div>\n\t\t\t\t<h4 class=\"check-title navy text-center\">親愛的市民，您好！</h4>\n\t\t\t\t<br>\n\t\t\t\t<p class=\"check-info navy\">\n          問卷調查資料已順利送出，\n          謝謝您的寶貴意見，並感謝您撥冗填寫!\n\t\t\t\t</p>\n\t\t\t\t<h4 class=\"check-footer navy text-center\">高雄市政府市長信箱處理小組 敬上</h4>\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-green\" (click)=\"goBack(true)\">前往市長信箱</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--<p>works</p>-->\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topics {\n  border-left: 1px solid #3C8F87;\n  margin-bottom: 3em; }\n  .topics .topic-title {\n    padding: .5em 1em;\n    color: #3C8F87;\n    background: rgba(128, 203, 196, 0.2); }\n  .topics .topic-list {\n    list-style: none;\n    letter-spacing: 3px;\n    line-height: 1.8em; }\n\n.question {\n  margin-top: 2em; }\n  .question .question-title {\n    font-size: 1.125em;\n    line-height: inherit;\n    font-weight: 900; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question/question.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionComponent = (function () {
    function QuestionComponent(questionService) {
        this.questionService = questionService;
        this.answer = {
            VersionNo: '',
            AppealerID: '',
            FillItems: []
        };
    }
    QuestionComponent.prototype.setSelect = function (objs, ReplyLV, idx, type) {
        if (type === 'RT' || type === 'R') {
            objs[ReplyLV].map(function (obj) {
                obj.BeSelected = false;
                return obj;
            });
            objs[ReplyLV][idx].BeSelected = true;
        }
        else if (type === 'CT' || type === 'C') {
            objs[ReplyLV][idx].BeSelected = !objs[ReplyLV][idx].BeSelected;
        }
        // console.log(obj[ReplyLV][idx]);
    };
    QuestionComponent.prototype.setCommnet = function (elm, ReplyLV, obj, idx) {
        var comment = elm.value;
        obj[ReplyLV][idx].OptionComment = comment;
        console.log(obj[ReplyLV][idx]);
    };
    QuestionComponent.prototype.questionAsync = function () {
        var _this = this;
        this.questionService
            .getQuestion()
            .subscribe(function (data) {
            _this.poll = data;
            _this.qusTitle = data.PollVersion[0];
            _this.question = data.Topics;
        });
    };
    QuestionComponent.prototype.pushItem = function (arrName) {
        if (arrName.BeSelected) {
            this.answer.FillItems.push({
                ReplyLevel: arrName.ReplyLevel,
                ReplyID: arrName.ReplyID,
                ReplyContent: arrName.OptionComment ? arrName.OptionComment : ''
            });
            this.BeSelect.push(arrName); //for debug
        }
    };
    QuestionComponent.prototype.getAns = function () {
        var _this = this;
        this.BeSelect = []; // for debug
        this.answer.AppealerID = this.qusTitle.AppealerID;
        this.answer.VersionNo = this.qusTitle.VersionNo;
        this.answer.FillItems = [];
        this.question.forEach(function (arr, idx1) {
            arr.QnR.forEach(function (arrQA, idx2) {
                arrQA.ReplyItems.forEach(function (arrReplayLV1) {
                    //console.log(arrReplayLV1)
                    // 判斷是否被選中
                    _this.pushItem(arrReplayLV1);
                    // 判斷第一層是否還有問題
                    if (arrReplayLV1.ItemOptions) {
                        arrReplayLV1.ItemOptions.forEach(function (arrReplayLV2) {
                            // console.log(arrReplayLV2);
                            // 判斷是否被選中
                            _this.pushItem(arrReplayLV2);
                            // 判斷第二層是否還有問題
                            if (arrReplayLV2.ItemOptions) {
                                arrReplayLV2.ItemOptions.forEach(function (arrReplayLV3) {
                                    _this.pushItem(arrReplayLV3);
                                });
                            }
                        });
                    }
                });
            });
        });
        // console.log(this.BeSelect) for debug
        console.log(this.answer);
    };
    QuestionComponent.prototype.onSubmitClick = function () {
    };
    QuestionComponent.prototype.getTextFeild = function (InputType) {
        if (InputType == "RT") {
            return true;
        }
        else if (InputType == "CT") {
            return true;
        }
        else if (InputType == "T") {
            return true;
        }
        else {
            // console.log(InputType);
        }
    };
    QuestionComponent.prototype.getInputType = function (InputType) {
        var type;
        var sliceResult = InputType[0];
        if (sliceResult == "R") {
            return 'radio';
        }
        else if (sliceResult == "C") {
            return 'checkbox';
        }
        else {
            return "hidden";
            // console.log(sliceResult);
        }
    };
    QuestionComponent.prototype.ngOnInit = function () {
        this.questionAsync();
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-question',
        template: __webpack_require__("../../../../../src/app/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object])
], QuestionComponent);

var _a;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rxjs_operators__ = __webpack_require__("../../../../../src/app/shared/rxjs-operators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.questionURL = 'assets/poll_v2.json';
    }
    QuestionService.prototype.getQuestion = function () {
        return this.http.get(this.questionURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuestionService);

var _a;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/app/report/area.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rxjs_operators__ = __webpack_require__("../../../../../src/app/shared/rxjs-operators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mattyyzac on 2016/10/27.
 */




var AreaService = (function () {
    function AreaService(_http) {
        this._http = _http;
        this.baseApiUrl = 'https://soweb.kcg.gov.tw/webapi/api/AddrCode';
    }
    AreaService.prototype.getDistricts = function (countyCode) {
        var url = this.baseApiUrl + "/2?p1=" + countyCode;
        return this._http.get(url)
            .map(function (resp) {
            if (resp.status === 200)
                return resp.json();
        })
            .catch(this.errorHandler);
    };
    AreaService.prototype.getRegions = function (districtCode) {
        var url = this.baseApiUrl + "/3?p1=" + districtCode;
        return this._http.get(url)
            .map(function (resp) { return resp.json(); })
            .catch(this.errorHandler);
    };
    AreaService.prototype.errorHandler = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return AreaService;
}());
AreaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AreaService);

var _a;
//# sourceMappingURL=area.service.js.map

/***/ }),

/***/ "../../../../../src/app/report/geoAddress.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoAddressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mattyyzac on 2016/10/4.
 * desc: Obtains the area data / address from geographic position, using google map api
 */



var GeoAddressService = (function () {
    function GeoAddressService(_http) {
        this._http = _http;
        //http://maps.googleapis.com/maps/api/geocode/json?latlng=22.604637500000003,120.2986576&key=yourapikey
        this.baseApiUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
        //
    }
    GeoAddressService.prototype.getAddressResult = function (lat, lng) {
        var url = "" + this.baseApiUrl + lat + "," + lng;
        return this._http.get(url).map(function (resp) { return resp.json(); });
    };
    return GeoAddressService;
}());
GeoAddressService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GeoAddressService);

var _a;
//# sourceMappingURL=geoAddress.service.js.map

/***/ }),

/***/ "../../../../../src/app/report/geoLocation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mattyyzac on 2016/10/6.
 * ref: https://gist.github.com/sasha7/0c32f3686eb49d44ccc8
 * ref: https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/getCurrentPosition
 */



var GEOLOCATION_ERRORS = {
    'errors.location.unsupportedBrowser': 'Browser does not support location services',
    'errors.location.permissionDenied': 'You have rejected access to your location',
    'errors.location.positionUnavailable': 'Unable to determine your location',
    'errors.location.timeout': 'Service timeout has been reached'
};
var GeolocationService = (function () {
    function GeolocationService(_http) {
        this._http = _http;
    }
    /**
     * Obtains the geographic position, in terms of latitude and longitude coordinates, of the device.
     * @param {Object} [opts] An object literal to specify one or more of the following attributes and desired values:
     *   - enableHighAccuracy: Specify true to obtain the most accurate position possible, or false to optimize in favor of performance and power consumption.
     *   - timeout: An Integer value that indicates the time, in milliseconds, allowed for obtaining the position.
     *              If timeout is Infinity, (the default value) the location request will not time out.
     *              If timeout is zero (0) or negative, the results depend on the behavior of the location provider.
     *   - maximumAge: An Integer value indicating the maximum age, in milliseconds, of cached position information.
     *                 If maximumAge is non-zero, and a cached position that is no older than maximumAge is available, the cached position is used instead of obtaining an updated location.
     *                 If maximumAge is zero (0), watchPosition always tries to obtain an updated position, even if a cached position is already available.
     *                 If maximumAge is Infinity, any cached position is used, regardless of its age, and watchPosition only tries to obtain an updated position if no cached position data exists.
     * @returns {Observable} An observable sequence with the geographical location of the device running the client.
     */
    GeolocationService.prototype.getLocation = function (opts) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(function (position) {
                    observer.next(position);
                    observer.complete();
                }, function (error) {
                    switch (error.code) {
                        case 1:
                            observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                            break;
                        case 2:
                            observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                            break;
                        case 3:
                            observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                            break;
                    }
                }, opts);
            }
            else {
                observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
            }
        });
    };
    return GeolocationService;
}());
GeolocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GeolocationService);

var _a;
//export var geolocationServiceInjectables: Array<any> = [
//  provide(GeolocationService, { useClass: GeolocationService })
//];
//# sourceMappingURL=geoLocation.service.js.map

/***/ }),

/***/ "../../../../../src/app/report/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_detail_component__ = __webpack_require__("../../../../../src/app/report/report-detail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__report_detail_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/report/modules/area.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CountyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistrictCodesKaohsiung; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RegionCodesKaohsiung; });
/**
 * Created by mattyyzac on 2016/10/14.
 */
//全台縣市
var CountyCodes = function () {
    return [
        { "CountyCode": "6400000000", "CountyName": "高雄市" }, { "CountyCode": "6500000000", "CountyName": "新北市" },
        { "CountyCode": "6600000000", "CountyName": "台中市" }, { "CountyCode": "6700000000", "CountyName": "台南市" },
        { "CountyCode": "6300000000", "CountyName": "台北市" }, { "CountyCode": "1001700000", "CountyName": "基隆市" },
        { "CountyCode": "1000200000", "CountyName": "宜蘭縣" }, { "CountyCode": "1001800000", "CountyName": "新竹市" },
        { "CountyCode": "1000400000", "CountyName": "新竹縣" }, { "CountyCode": "1000300000", "CountyName": "桃園縣" },
        { "CountyCode": "1000500000", "CountyName": "苗栗縣" }, { "CountyCode": "1000700000", "CountyName": "彰化縣" },
        { "CountyCode": "1000800000", "CountyName": "南投縣" }, { "CountyCode": "1002000000", "CountyName": "嘉義市" },
        { "CountyCode": "1001000000", "CountyName": "嘉義縣" }, { "CountyCode": "1000900000", "CountyName": "雲林縣" },
        { "CountyCode": "1001600000", "CountyName": "澎湖縣" }, { "CountyCode": "1001300000", "CountyName": "屏東縣" },
        { "CountyCode": "1001400000", "CountyName": "台東縣" }, { "CountyCode": "1001500000", "CountyName": "花蓮縣" },
        { "CountyCode": "0902000000", "CountyName": "金門縣" }, { "CountyCode": "0900700000", "CountyName": "連江縣" }
    ];
};
// 高雄市行政區
var DistrictCodesKaohsiung = function (isIncludeNoArea) {
    var wholeDistrict = [
        { "DistrictCode": "6400100000", "DistrictName": "鹽埕區" }, { "DistrictCode": "6400200000", "DistrictName": "鼓山區" },
        { "DistrictCode": "6400300000", "DistrictName": "左營區" }, { "DistrictCode": "6400400000", "DistrictName": "楠梓區" },
        { "DistrictCode": "6400500000", "DistrictName": "三民區" }, { "DistrictCode": "6400600000", "DistrictName": "新興區" },
        { "DistrictCode": "6400700000", "DistrictName": "前金區" }, { "DistrictCode": "6400800000", "DistrictName": "苓雅區" },
        { "DistrictCode": "6400900000", "DistrictName": "前鎮區" }, { "DistrictCode": "6401000000", "DistrictName": "旗津區" },
        { "DistrictCode": "6401100000", "DistrictName": "小港區" }, { "DistrictCode": "6401200000", "DistrictName": "鳳山區" },
        { "DistrictCode": "6401300000", "DistrictName": "林園區" }, { "DistrictCode": "6401400000", "DistrictName": "大寮區" },
        { "DistrictCode": "6401500000", "DistrictName": "大樹區" }, { "DistrictCode": "6401600000", "DistrictName": "大社區" },
        { "DistrictCode": "6401700000", "DistrictName": "仁武區" }, { "DistrictCode": "6401800000", "DistrictName": "鳥松區" },
        { "DistrictCode": "6401900000", "DistrictName": "岡山區" }, { "DistrictCode": "6402000000", "DistrictName": "橋頭區" },
        { "DistrictCode": "6402100000", "DistrictName": "燕巢區" }, { "DistrictCode": "6402200000", "DistrictName": "田寮區" },
        { "DistrictCode": "6402300000", "DistrictName": "阿蓮區" }, { "DistrictCode": "6402400000", "DistrictName": "路竹區" },
        { "DistrictCode": "6402500000", "DistrictName": "湖內區" }, { "DistrictCode": "6402600000", "DistrictName": "茄萣區" },
        { "DistrictCode": "6402700000", "DistrictName": "永安區" }, { "DistrictCode": "6402800000", "DistrictName": "彌陀區" },
        { "DistrictCode": "6402900000", "DistrictName": "梓官區" }, { "DistrictCode": "6403000000", "DistrictName": "旗山區" },
        { "DistrictCode": "6403100000", "DistrictName": "美濃區" }, { "DistrictCode": "6403200000", "DistrictName": "六龜區" },
        { "DistrictCode": "6403300000", "DistrictName": "甲仙區" }, { "DistrictCode": "6403400000", "DistrictName": "杉林區" },
        { "DistrictCode": "6403500000", "DistrictName": "內門區" }, { "DistrictCode": "6403600000", "DistrictName": "茂林區" },
        { "DistrictCode": "6403700000", "DistrictName": "桃源區" }, { "DistrictCode": "6403800000", "DistrictName": "那瑪夏區" },
        { "DistrictCode": "6411100000", "DistrictName": "無法分區" }
    ];
    if (isIncludeNoArea) {
        return wholeDistrict;
    }
    else {
        wholeDistrict.splice(38, 1);
        return wholeDistrict;
    }
};
// https://soweb.kcg.gov.tw/webapi/api/AddrCode/3?p1=6400100000
var RegionCodesKaohsiung = function (districtCode) {
    switch (districtCode) {
        case '6400100000':
            return [{ "RegionCode": "6400100001", "RegionName": "藍橋里" }, { "RegionCode": "6400100002", "RegionName": "慈愛里" }, { "RegionCode": "6400100003", "RegionName": "博愛里" }, { "RegionCode": "6400100004", "RegionName": "壽星里" }, { "RegionCode": "6400100005", "RegionName": "中山里" }, { "RegionCode": "6400100006", "RegionName": "教仁里" }, { "RegionCode": "6400100007", "RegionName": "新樂里" }, { "RegionCode": "6400100008", "RegionName": "中原里" }, { "RegionCode": "6400100009", "RegionName": "光明里" }, { "RegionCode": "6400100010", "RegionName": "育仁里" }, { "RegionCode": "6400100011", "RegionName": "河濱里" }, { "RegionCode": "6400100012", "RegionName": "沙地里" }, { "RegionCode": "6400100013", "RegionName": "南端里" }, { "RegionCode": "6400100014", "RegionName": "港都里" }, { "RegionCode": "6400100015", "RegionName": "江西里" }, { "RegionCode": "6400100016", "RegionName": "新豐里" }, { "RegionCode": "6400100017", "RegionName": "府北里" }, { "RegionCode": "6400100018", "RegionName": "陸橋里" }, { "RegionCode": "6400100019", "RegionName": "瀨南里" }, { "RegionCode": "6400100020", "RegionName": "新化里" }, { "RegionCode": "6400100021", "RegionName": "江南里" }];
        case '6400200000':
            return [{ "RegionCode": "6400200001", "RegionName": "鼓峰里" }, { "RegionCode": "6400200002", "RegionName": "雄峰里" }, { "RegionCode": "6400200003", "RegionName": "前峰里" }, { "RegionCode": "6400200004", "RegionName": "光榮里" }, { "RegionCode": "6400200005", "RegionName": "民族里" }, { "RegionCode": "6400200006", "RegionName": "內惟里" }, { "RegionCode": "6400200007", "RegionName": "建國里" }, { "RegionCode": "6400200008", "RegionName": "忠正里" }, { "RegionCode": "6400200009", "RegionName": "自強里" }, { "RegionCode": "6400200010", "RegionName": "龍井里" }, { "RegionCode": "6400200011", "RegionName": "正德里" }, { "RegionCode": "6400200012", "RegionName": "平和里" }, { "RegionCode": "6400200013", "RegionName": "民強里" }, { "RegionCode": "6400200014", "RegionName": "厚生里" }, { "RegionCode": "6400200015", "RegionName": "龍子里" }, { "RegionCode": "6400200016", "RegionName": "龍水里" }, { "RegionCode": "6400200017", "RegionName": "明誠里" }, { "RegionCode": "6400200018", "RegionName": "華豐里" }, { "RegionCode": "6400200019", "RegionName": "裕興里" }, { "RegionCode": "6400200020", "RegionName": "裕豐里" }, { "RegionCode": "6400200021", "RegionName": "鼓岩里" }, { "RegionCode": "6400200022", "RegionName": "樹德里" }, { "RegionCode": "6400200023", "RegionName": "寶樹里" }, { "RegionCode": "6400200024", "RegionName": "興宗里" }, { "RegionCode": "6400200025", "RegionName": "光化里" }, { "RegionCode": "6400200026", "RegionName": "山下里" }, { "RegionCode": "6400200027", "RegionName": "河邊里" }, { "RegionCode": "6400200028", "RegionName": "綠川里" }, { "RegionCode": "6400200029", "RegionName": "登山里" }, { "RegionCode": "6400200030", "RegionName": "峰南里" }, { "RegionCode": "6400200031", "RegionName": "麗興里" }, { "RegionCode": "6400200032", "RegionName": "新民里" }, { "RegionCode": "6400200033", "RegionName": "延平里" }, { "RegionCode": "6400200034", "RegionName": "維生里" }, { "RegionCode": "6400200035", "RegionName": "惠安里" }, { "RegionCode": "6400200036", "RegionName": "壽山里" }, { "RegionCode": "6400200037", "RegionName": "哨船頭里" }, { "RegionCode": "6400200038", "RegionName": "桃源里" }];
        case '6400300000':
            return [{ "RegionCode": "6400300001", "RegionName": "進學里" }, { "RegionCode": "6400300002", "RegionName": "尾西里" }, { "RegionCode": "6400300003", "RegionName": "頂北里" }, { "RegionCode": "6400300004", "RegionName": "中北里" }, { "RegionCode": "6400300005", "RegionName": "中南里" }, { "RegionCode": "6400300006", "RegionName": "廟東里" }, { "RegionCode": "6400300007", "RegionName": "廟北里" }, { "RegionCode": "6400300008", "RegionName": "尾南里" }, { "RegionCode": "6400300009", "RegionName": "尾北里" }, { "RegionCode": "6400300011", "RegionName": "屏山里" }, { "RegionCode": "6400300012", "RegionName": "祥和里" }, { "RegionCode": "6400300013", "RegionName": "永清里" }, { "RegionCode": "6400300014", "RegionName": "復興里" }, { "RegionCode": "6400300015", "RegionName": "莒光里" }, { "RegionCode": "6400300016", "RegionName": "光輝里" }, { "RegionCode": "6400300017", "RegionName": "合群里" }, { "RegionCode": "6400300019", "RegionName": "明建里" }, { "RegionCode": "6400300021", "RegionName": "頂西里" }, { "RegionCode": "6400300022", "RegionName": "聖后里" }, { "RegionCode": "6400300023", "RegionName": "聖西里" }, { "RegionCode": "6400300024", "RegionName": "聖南里" }, { "RegionCode": "6400300025", "RegionName": "城南里" }, { "RegionCode": "6400300026", "RegionName": "路東里" }, { "RegionCode": "6400300027", "RegionName": "部北里" }, { "RegionCode": "6400300028", "RegionName": "部南里" }, { "RegionCode": "6400300029", "RegionName": "埤西里" }, { "RegionCode": "6400300030", "RegionName": "埤北里" }, { "RegionCode": "6400300031", "RegionName": "埤東里" }, { "RegionCode": "6400300032", "RegionName": "海勝里" }, { "RegionCode": "6400300034", "RegionName": "崇實里" }, { "RegionCode": "6400300035", "RegionName": "自助里" }, { "RegionCode": "6400300036", "RegionName": "果貿里" }, { "RegionCode": "6400300037", "RegionName": "果惠里" }, { "RegionCode": "6400300038", "RegionName": "果峰里" }, { "RegionCode": "6400300039", "RegionName": "新下里" }, { "RegionCode": "6400300040", "RegionName": "新上里" }, { "RegionCode": "6400300041", "RegionName": "新中里" }, { "RegionCode": "6400300042", "RegionName": "新光里" }, { "RegionCode": "6400300043", "RegionName": "菜公里" }, { "RegionCode": "6400300044", "RegionName": "福山里" }];
        case '6400400000':
            return [{ "RegionCode": "6400400001", "RegionName": "清豐里" }, { "RegionCode": "6400400002", "RegionName": "東寧里" }, { "RegionCode": "6400400003", "RegionName": "五常里" }, { "RegionCode": "6400400004", "RegionName": "享平里" }, { "RegionCode": "6400400005", "RegionName": "中陽里" }, { "RegionCode": "6400400006", "RegionName": "惠楠里" }, { "RegionCode": "6400400007", "RegionName": "惠民里" }, { "RegionCode": "6400400008", "RegionName": "惠豐里" }, { "RegionCode": "6400400009", "RegionName": "錦屏里" }, { "RegionCode": "6400400010", "RegionName": "玉屏里" }, { "RegionCode": "6400400011", "RegionName": "金田里" }, { "RegionCode": "6400400012", "RegionName": "稔田里" }, { "RegionCode": "6400400013", "RegionName": "瑞屏里" }, { "RegionCode": "6400400014", "RegionName": "翠屏里" }, { "RegionCode": "6400400015", "RegionName": "宏南里" }, { "RegionCode": "6400400016", "RegionName": "宏毅里" }, { "RegionCode": "6400400017", "RegionName": "宏榮里" }, { "RegionCode": "6400400018", "RegionName": "廣昌里" }, { "RegionCode": "6400400019", "RegionName": "久昌里" }, { "RegionCode": "6400400020", "RegionName": "大昌里" }, { "RegionCode": "6400400021", "RegionName": "福昌里" }, { "RegionCode": "6400400022", "RegionName": "盛昌里" }, { "RegionCode": "6400400023", "RegionName": "泰昌里" }, { "RegionCode": "6400400024", "RegionName": "興昌里" }, { "RegionCode": "6400400025", "RegionName": "建昌里" }, { "RegionCode": "6400400026", "RegionName": "宏昌里" }, { "RegionCode": "6400400027", "RegionName": "和昌里" }, { "RegionCode": "6400400028", "RegionName": "慶昌里" }, { "RegionCode": "6400400029", "RegionName": "隆昌里" }, { "RegionCode": "6400400030", "RegionName": "秀昌里" }, { "RegionCode": "6400400031", "RegionName": "裕昌里" }, { "RegionCode": "6400400032", "RegionName": "國昌里" }, { "RegionCode": "6400400033", "RegionName": "加昌里" }, { "RegionCode": "6400400034", "RegionName": "仁昌里" }, { "RegionCode": "6400400035", "RegionName": "藍田里" }, { "RegionCode": "6400400036", "RegionName": "中興里" }, { "RegionCode": "6400400037", "RegionName": "中和里" }];
        case '6400500000':
            return [{ "RegionCode": "6400500001", "RegionName": "鼎金里" }, { "RegionCode": "6400500002", "RegionName": "鼎盛里" }, { "RegionCode": "6400500003", "RegionName": "鼎強里" }, { "RegionCode": "6400500004", "RegionName": "鼎力里" }, { "RegionCode": "6400500005", "RegionName": "鼎西里" }, { "RegionCode": "6400500006", "RegionName": "鼎中里" }, { "RegionCode": "6400500007", "RegionName": "鼎泰里" }, { "RegionCode": "6400500008", "RegionName": "本館里" }, { "RegionCode": "6400500009", "RegionName": "本和里" }, { "RegionCode": "6400500010", "RegionName": "本文里" }, { "RegionCode": "6400500011", "RegionName": "本武里" }, { "RegionCode": "6400500012", "RegionName": "本元里" }, { "RegionCode": "6400500013", "RegionName": "本安里" }, { "RegionCode": "6400500014", "RegionName": "本上里" }, { "RegionCode": "6400500015", "RegionName": "本揚里" }, { "RegionCode": "6400500016", "RegionName": "寶獅里" }, { "RegionCode": "6400500017", "RegionName": "寶德里" }, { "RegionCode": "6400500018", "RegionName": "寶泰里" }, { "RegionCode": "6400500019", "RegionName": "寶興里" }, { "RegionCode": "6400500020", "RegionName": "寶中里" }, { "RegionCode": "6400500021", "RegionName": "寶華里" }, { "RegionCode": "6400500022", "RegionName": "寶國里" }, { "RegionCode": "6400500023", "RegionName": "寶民里" }, { "RegionCode": "6400500024", "RegionName": "寶慶里" }, { "RegionCode": "6400500025", "RegionName": "寶業里" }, { "RegionCode": "6400500026", "RegionName": "寶盛里" }, { "RegionCode": "6400500027", "RegionName": "寶安里" }, { "RegionCode": "6400500028", "RegionName": "寶龍里" }, { "RegionCode": "6400500029", "RegionName": "寶珠里" }, { "RegionCode": "6400500030", "RegionName": "寶玉里" }, { "RegionCode": "6400500031", "RegionName": "灣子里" }, { "RegionCode": "6400500032", "RegionName": "灣愛里" }, { "RegionCode": "6400500033", "RegionName": "灣中里" }, { "RegionCode": "6400500034", "RegionName": "灣華里" }, { "RegionCode": "6400500035", "RegionName": "灣勝里" }, { "RegionCode": "6400500036", "RegionName": "灣利里" }, { "RegionCode": "6400500037", "RegionName": "灣復里" }, { "RegionCode": "6400500038", "RegionName": "正興里" }, { "RegionCode": "6400500039", "RegionName": "正順里" }, { "RegionCode": "6400500040", "RegionName": "灣興里" }, { "RegionCode": "6400500041", "RegionName": "灣成里" }, { "RegionCode": "6400500042", "RegionName": "安康里" }, { "RegionCode": "6400500043", "RegionName": "安寧里" }, { "RegionCode": "6400500044", "RegionName": "安吉里" }, { "RegionCode": "6400500045", "RegionName": "安發里" }, { "RegionCode": "6400500046", "RegionName": "安東里" }, { "RegionCode": "6400500047", "RegionName": "安和里" }, { "RegionCode": "6400500048", "RegionName": "達德里" }, { "RegionCode": "6400500049", "RegionName": "達明里" }, { "RegionCode": "6400500050", "RegionName": "達仁里" }, { "RegionCode": "6400500051", "RegionName": "達勇里" }, { "RegionCode": "6400500052", "RegionName": "同德里" }, { "RegionCode": "6400500053", "RegionName": "德智里" }, { "RegionCode": "6400500054", "RegionName": "德仁里" }, { "RegionCode": "6400500055", "RegionName": "安生里" }, { "RegionCode": "6400500056", "RegionName": "德東里" }, { "RegionCode": "6400500057", "RegionName": "德行里" }, { "RegionCode": "6400500058", "RegionName": "精華里" }, { "RegionCode": "6400500059", "RegionName": "民享里" }, { "RegionCode": "6400500060", "RegionName": "安宜里" }, { "RegionCode": "6400500061", "RegionName": "安泰里" }, { "RegionCode": "6400500062", "RegionName": "安邦里" }, { "RegionCode": "6400500063", "RegionName": "十全里" }, { "RegionCode": "6400500064", "RegionName": "十美里" }, { "RegionCode": "6400500065", "RegionName": "德北里" }, { "RegionCode": "6400500066", "RegionName": "立誠里" }, { "RegionCode": "6400500067", "RegionName": "立業里" }, { "RegionCode": "6400500068", "RegionName": "港東里" }, { "RegionCode": "6400500069", "RegionName": "港新里" }, { "RegionCode": "6400500070", "RegionName": "港西里" }, { "RegionCode": "6400500072", "RegionName": "博愛里" }, { "RegionCode": "6400500073", "RegionName": "博惠里" }, { "RegionCode": "6400500074", "RegionName": "長明里" }, { "RegionCode": "6400500075", "RegionName": "建東里" }, { "RegionCode": "6400500076", "RegionName": "興德里" }, { "RegionCode": "6400500077", "RegionName": "鳳南里" }, { "RegionCode": "6400500078", "RegionName": "鳳北里" }, { "RegionCode": "6400500079", "RegionName": "德西里" }, { "RegionCode": "6400500081", "RegionName": "豐裕里" }, { "RegionCode": "6400500082", "RegionName": "川東里" }, { "RegionCode": "6400500083", "RegionName": "裕民里" }, { "RegionCode": "6400500084", "RegionName": "力行里" }, { "RegionCode": "6400500085", "RegionName": "千歲里" }, { "RegionCode": "6400500086", "RegionName": "立德里" }, { "RegionCode": "6400500087", "RegionName": "千北里" }, { "RegionCode": "6400500088", "RegionName": "千秋里" }];
        case '6400600000':
            return [{ "RegionCode": "6400600001", "RegionName": "浩然里" }, { "RegionCode": "6400600002", "RegionName": "振成里" }, { "RegionCode": "6400600003", "RegionName": "德生里" }, { "RegionCode": "6400600004", "RegionName": "振華里" }, { "RegionCode": "6400600005", "RegionName": "正氣里" }, { "RegionCode": "6400600006", "RegionName": "德政里" }, { "RegionCode": "6400600007", "RegionName": "仁聲里" }, { "RegionCode": "6400600008", "RegionName": "德望里" }, { "RegionCode": "6400600009", "RegionName": "華聲里" }, { "RegionCode": "6400600010", "RegionName": "蕉園里" }, { "RegionCode": "6400600011", "RegionName": "永寧里" }, { "RegionCode": "6400600012", "RegionName": "玉衡里" }, { "RegionCode": "6400600013", "RegionName": "順昌里" }, { "RegionCode": "6400600014", "RegionName": "文昌里" }, { "RegionCode": "6400600015", "RegionName": "光耀里" }, { "RegionCode": "6400600016", "RegionName": "興昌里" }, { "RegionCode": "6400600017", "RegionName": "開平里" }, { "RegionCode": "6400600018", "RegionName": "成功里" }, { "RegionCode": "6400600019", "RegionName": "新江里" }, { "RegionCode": "6400600020", "RegionName": "黎明里" }, { "RegionCode": "6400600021", "RegionName": "愛平里" }, { "RegionCode": "6400600022", "RegionName": "南港里" }, { "RegionCode": "6400600023", "RegionName": "中東里" }, { "RegionCode": "6400600024", "RegionName": "明莊里" }, { "RegionCode": "6400600025", "RegionName": "大明里" }, { "RegionCode": "6400600026", "RegionName": "秋山里" }, { "RegionCode": "6400600027", "RegionName": "長驛里" }, { "RegionCode": "6400600028", "RegionName": "建興里" }, { "RegionCode": "6400600029", "RegionName": "建華里" }, { "RegionCode": "6400600030", "RegionName": "漢民里" }, { "RegionCode": "6400600031", "RegionName": "榮治里" }, { "RegionCode": "6400600032", "RegionName": "東坡里" }];
        case '6400700000':
            return [{ "RegionCode": "6400700001", "RegionName": "三川里" }, { "RegionCode": "6400700002", "RegionName": "草江里" }, { "RegionCode": "6400700003", "RegionName": "長城里" }, { "RegionCode": "6400700004", "RegionName": "北金里" }, { "RegionCode": "6400700005", "RegionName": "東金里" }, { "RegionCode": "6400700006", "RegionName": "新生里" }, { "RegionCode": "6400700007", "RegionName": "後金里" }, { "RegionCode": "6400700008", "RegionName": "長興里" }, { "RegionCode": "6400700009", "RegionName": "青山里" }, { "RegionCode": "6400700010", "RegionName": "民生里" }, { "RegionCode": "6400700011", "RegionName": "復元里" }, { "RegionCode": "6400700012", "RegionName": "林投里" }, { "RegionCode": "6400700013", "RegionName": "國民里" }, { "RegionCode": "6400700014", "RegionName": "社東里" }, { "RegionCode": "6400700015", "RegionName": "社西里" }, { "RegionCode": "6400700016", "RegionName": "博孝里" }, { "RegionCode": "6400700017", "RegionName": "長生里" }, { "RegionCode": "6400700018", "RegionName": "榮復里" }, { "RegionCode": "6400700019", "RegionName": "文西里" }, { "RegionCode": "6400700020", "RegionName": "文東里" }];
        case '6400800000':
            return [{ "RegionCode": "6400800001", "RegionName": "博仁里" }, { "RegionCode": "6400800002", "RegionName": "苓洲里" }, { "RegionCode": "6400800003", "RegionName": "苓昇里" }, { "RegionCode": "6400800004", "RegionName": "苓中里" }, { "RegionCode": "6400800005", "RegionName": "苓雅里" }, { "RegionCode": "6400800006", "RegionName": "苓東里" }, { "RegionCode": "6400800007", "RegionName": "城北里" }, { "RegionCode": "6400800008", "RegionName": "城西里" }, { "RegionCode": "6400800009", "RegionName": "城東里" }, { "RegionCode": "6400800010", "RegionName": "意誠里" }, { "RegionCode": "6400800011", "RegionName": "鼓中里" }, { "RegionCode": "6400800012", "RegionName": "田西里" }, { "RegionCode": "6400800013", "RegionName": "人和里" }, { "RegionCode": "6400800014", "RegionName": "仁政里" }, { "RegionCode": "6400800015", "RegionName": "廣澤里" }, { "RegionCode": "6400800016", "RegionName": "美田里" }, { "RegionCode": "6400800017", "RegionName": "華堂里" }, { "RegionCode": "6400800018", "RegionName": "日中里" }, { "RegionCode": "6400800019", "RegionName": "普照里" }, { "RegionCode": "6400800020", "RegionName": "和煦里" }, { "RegionCode": "6400800021", "RegionName": "晴朗里" }, { "RegionCode": "6400800022", "RegionName": "普天里" }, { "RegionCode": "6400800023", "RegionName": "林富里" }, { "RegionCode": "6400800024", "RegionName": "林圍里" }, { "RegionCode": "6400800025", "RegionName": "林安里" }, { "RegionCode": "6400800026", "RegionName": "光華里" }, { "RegionCode": "6400800027", "RegionName": "林興里" }, { "RegionCode": "6400800028", "RegionName": "林華里" }, { "RegionCode": "6400800029", "RegionName": "林西里" }, { "RegionCode": "6400800030", "RegionName": "林中里" }, { "RegionCode": "6400800031", "RegionName": "林泉里" }, { "RegionCode": "6400800032", "RegionName": "林南里" }, { "RegionCode": "6400800033", "RegionName": "中正里" }, { "RegionCode": "6400800034", "RegionName": "尚義里" }, { "RegionCode": "6400800035", "RegionName": "同慶里" }, { "RegionCode": "6400800036", "RegionName": "凱旋里" }, { "RegionCode": "6400800037", "RegionName": "安祥里" }, { "RegionCode": "6400800038", "RegionName": "奏捷里" }, { "RegionCode": "6400800039", "RegionName": "福壽里" }, { "RegionCode": "6400800040", "RegionName": "福南里" }, { "RegionCode": "6400800041", "RegionName": "五權里" }, { "RegionCode": "6400800042", "RegionName": "民主里" }, { "RegionCode": "6400800043", "RegionName": "林德里" }, { "RegionCode": "6400800044", "RegionName": "林貴里" }, { "RegionCode": "6400800045", "RegionName": "林榮里" }, { "RegionCode": "6400800046", "RegionName": "英明里" }, { "RegionCode": "6400800047", "RegionName": "林靖里" }, { "RegionCode": "6400800048", "RegionName": "朝陽里" }, { "RegionCode": "6400800049", "RegionName": "福隆里" }, { "RegionCode": "6400800050", "RegionName": "福祥里" }, { "RegionCode": "6400800051", "RegionName": "福海里" }, { "RegionCode": "6400800052", "RegionName": "福康里" }, { "RegionCode": "6400800053", "RegionName": "福人里" }, { "RegionCode": "6400800054", "RegionName": "福地里" }, { "RegionCode": "6400800055", "RegionName": "福居里" }, { "RegionCode": "6400800056", "RegionName": "福東里" }, { "RegionCode": "6400800057", "RegionName": "福西里" }, { "RegionCode": "6400800058", "RegionName": "永康里" }, { "RegionCode": "6400800059", "RegionName": "正文里" }, { "RegionCode": "6400800060", "RegionName": "正言里" }, { "RegionCode": "6400800061", "RegionName": "正大里" }, { "RegionCode": "6400800062", "RegionName": "五福里" }, { "RegionCode": "6400800063", "RegionName": "正心里" }, { "RegionCode": "6400800064", "RegionName": "正道里" }, { "RegionCode": "6400800065", "RegionName": "正義里" }, { "RegionCode": "6400800066", "RegionName": "正仁里" }, { "RegionCode": "6400800067", "RegionName": "文昌里" }, { "RegionCode": "6400800068", "RegionName": "建軍里" }, { "RegionCode": "6400800069", "RegionName": "衛武里" }];
        case '6400900000':
            return [{ "RegionCode": "6400900001", "RegionName": "草衙里" }, { "RegionCode": "6400900002", "RegionName": "明孝里" }, { "RegionCode": "6400900003", "RegionName": "明正里" }, { "RegionCode": "6400900004", "RegionName": "明義里" }, { "RegionCode": "6400900005", "RegionName": "仁愛里" }, { "RegionCode": "6400900006", "RegionName": "德昌里" }, { "RegionCode": "6400900007", "RegionName": "平等里" }, { "RegionCode": "6400900008", "RegionName": "平昌里" }, { "RegionCode": "6400900009", "RegionName": "明禮里" }, { "RegionCode": "6400900010", "RegionName": "信義里" }, { "RegionCode": "6400900011", "RegionName": "信德里" }, { "RegionCode": "6400900012", "RegionName": "明道里" }, { "RegionCode": "6400900013", "RegionName": "興化里" }, { "RegionCode": "6400900014", "RegionName": "興仁里" }, { "RegionCode": "6400900015", "RegionName": "前鎮里" }, { "RegionCode": "6400900016", "RegionName": "鎮東里" }, { "RegionCode": "6400900017", "RegionName": "鎮榮里" }, { "RegionCode": "6400900018", "RegionName": "鎮昌里" }, { "RegionCode": "6400900019", "RegionName": "鎮海里" }, { "RegionCode": "6400900020", "RegionName": "鎮陽里" }, { "RegionCode": "6400900021", "RegionName": "興邦里" }, { "RegionCode": "6400900022", "RegionName": "鎮中里" }, { "RegionCode": "6400900023", "RegionName": "鎮北里" }, { "RegionCode": "6400900024", "RegionName": "忠純里" }, { "RegionCode": "6400900025", "RegionName": "忠誠里" }, { "RegionCode": "6400900028", "RegionName": "西山里" }, { "RegionCode": "6400900029", "RegionName": "民權里" }, { "RegionCode": "6400900030", "RegionName": "建隆里" }, { "RegionCode": "6400900031", "RegionName": "振興里" }, { "RegionCode": "6400900032", "RegionName": "良和里" }, { "RegionCode": "6400900033", "RegionName": "西甲里" }, { "RegionCode": "6400900034", "RegionName": "盛興里" }, { "RegionCode": "6400900035", "RegionName": "盛豐里" }, { "RegionCode": "6400900036", "RegionName": "興中里" }, { "RegionCode": "6400900037", "RegionName": "興東里" }, { "RegionCode": "6400900038", "RegionName": "忠孝里" }, { "RegionCode": "6400900039", "RegionName": "復國里" }, { "RegionCode": "6400900040", "RegionName": "竹內里" }, { "RegionCode": "6400900041", "RegionName": "竹東里" }, { "RegionCode": "6400900042", "RegionName": "竹南里" }, { "RegionCode": "6400900043", "RegionName": "竹北里" }, { "RegionCode": "6400900044", "RegionName": "竹西里" }, { "RegionCode": "6400900045", "RegionName": "竹中里" }, { "RegionCode": "6400900046", "RegionName": "瑞竹里" }, { "RegionCode": "6400900047", "RegionName": "瑞南里" }, { "RegionCode": "6400900048", "RegionName": "瑞豐里" }, { "RegionCode": "6400900049", "RegionName": "瑞祥里" }, { "RegionCode": "6400900050", "RegionName": "瑞東里" }, { "RegionCode": "6400900051", "RegionName": "瑞和里" }, { "RegionCode": "6400900052", "RegionName": "瑞平里" }, { "RegionCode": "6400900053", "RegionName": "瑞隆里" }, { "RegionCode": "6400900054", "RegionName": "瑞北里" }, { "RegionCode": "6400900055", "RegionName": "瑞西里" }, { "RegionCode": "6400900056", "RegionName": "瑞崗里" }, { "RegionCode": "6400900057", "RegionName": "瑞興里" }, { "RegionCode": "6400900058", "RegionName": "瑞誠里" }, { "RegionCode": "6400900059", "RegionName": "瑞文里" }, { "RegionCode": "6400900060", "RegionName": "瑞華里" }, { "RegionCode": "6400900061", "RegionName": "瑞昌里" }];
        case '6401000000':
            return [{ "RegionCode": "6401000001", "RegionName": "旗下里" }, { "RegionCode": "6401000002", "RegionName": "永安里" }, { "RegionCode": "6401000003", "RegionName": "振興里" }, { "RegionCode": "6401000004", "RegionName": "慈愛里" }, { "RegionCode": "6401000005", "RegionName": "復興里" }, { "RegionCode": "6401000006", "RegionName": "中華里" }, { "RegionCode": "6401000007", "RegionName": "實踐里" }, { "RegionCode": "6401000008", "RegionName": "北汕里" }, { "RegionCode": "6401000009", "RegionName": "南汕里" }, { "RegionCode": "6401000010", "RegionName": "上竹里" }, { "RegionCode": "6401000011", "RegionName": "中洲里" }, { "RegionCode": "6401000012", "RegionName": "安順里" }, { "RegionCode": "6401000013", "RegionName": "中興里" }];
        case '6401100000':
            return [{ "RegionCode": "6401100001", "RegionName": "小港里" }, { "RegionCode": "6401100002", "RegionName": "港口里" }, { "RegionCode": "6401100003", "RegionName": "港正里" }, { "RegionCode": "6401100004", "RegionName": "港墘里" }, { "RegionCode": "6401100005", "RegionName": "港明里" }, { "RegionCode": "6401100006", "RegionName": "港后里" }, { "RegionCode": "6401100007", "RegionName": "港南里" }, { "RegionCode": "6401100008", "RegionName": "港興里" }, { "RegionCode": "6401100009", "RegionName": "鳳宮里" }, { "RegionCode": "6401100010", "RegionName": "店鎮里" }, { "RegionCode": "6401100011", "RegionName": "大苓里" }, { "RegionCode": "6401100012", "RegionName": "二苓里" }, { "RegionCode": "6401100013", "RegionName": "三苓里" }, { "RegionCode": "6401100014", "RegionName": "正苓里" }, { "RegionCode": "6401100015", "RegionName": "順苓里" }, { "RegionCode": "6401100016", "RegionName": "六苓里" }, { "RegionCode": "6401100017", "RegionName": "宏亮里" }, { "RegionCode": "6401100018", "RegionName": "山東里" }, { "RegionCode": "6401100019", "RegionName": "青島里" }, { "RegionCode": "6401100020", "RegionName": "濟南里" }, { "RegionCode": "6401100021", "RegionName": "泰山里" }, { "RegionCode": "6401100022", "RegionName": "山明里" }, { "RegionCode": "6401100023", "RegionName": "高松里" }, { "RegionCode": "6401100024", "RegionName": "松金里" }, { "RegionCode": "6401100025", "RegionName": "松山里" }, { "RegionCode": "6401100026", "RegionName": "大坪里" }, { "RegionCode": "6401100027", "RegionName": "坪頂里" }, { "RegionCode": "6401100028", "RegionName": "孔宅里" }, { "RegionCode": "6401100029", "RegionName": "廈莊里" }, { "RegionCode": "6401100030", "RegionName": "合作里" }, { "RegionCode": "6401100031", "RegionName": "桂林里" }, { "RegionCode": "6401100032", "RegionName": "中厝里" }, { "RegionCode": "6401100033", "RegionName": "鳳鳴里" }, { "RegionCode": "6401100034", "RegionName": "龍鳳里" }, { "RegionCode": "6401100035", "RegionName": "鳳森里" }, { "RegionCode": "6401100036", "RegionName": "鳳林里" }, { "RegionCode": "6401100037", "RegionName": "鳳興里" }, { "RegionCode": "6401100038", "RegionName": "鳳源里" }];
        case '6401200000':
            return [{ "RegionCode": "6401200001", "RegionName": "縣口里" }, { "RegionCode": "6401200002", "RegionName": "成功里" }, { "RegionCode": "6401200003", "RegionName": "光明里" }, { "RegionCode": "6401200004", "RegionName": "興中里" }, { "RegionCode": "6401200005", "RegionName": "南興里" }, { "RegionCode": "6401200006", "RegionName": "和德里" }, { "RegionCode": "6401200007", "RegionName": "鳳崗里" }, { "RegionCode": "6401200008", "RegionName": "中和里" }, { "RegionCode": "6401200009", "RegionName": "鎮北里" }, { "RegionCode": "6401200010", "RegionName": "縣衙里" }, { "RegionCode": "6401200011", "RegionName": "文英里" }, { "RegionCode": "6401200012", "RegionName": "鎮西里" }, { "RegionCode": "6401200013", "RegionName": "鎮東里" }, { "RegionCode": "6401200014", "RegionName": "埤頂里" }, { "RegionCode": "6401200015", "RegionName": "中正里" }, { "RegionCode": "6401200016", "RegionName": "鎮南里" }, { "RegionCode": "6401200017", "RegionName": "老爺里" }, { "RegionCode": "6401200018", "RegionName": "瑞竹里" }, { "RegionCode": "6401200019", "RegionName": "忠義里" }, { "RegionCode": "6401200020", "RegionName": "誠義里" }, { "RegionCode": "6401200021", "RegionName": "新興里" }, { "RegionCode": "6401200022", "RegionName": "海光里" }, { "RegionCode": "6401200023", "RegionName": "海風里" }, { "RegionCode": "6401200024", "RegionName": "忠誠里" }, { "RegionCode": "6401200025", "RegionName": "新甲里" }, { "RegionCode": "6401200026", "RegionName": "武漢里" }, { "RegionCode": "6401200027", "RegionName": "正義里" }, { "RegionCode": "6401200028", "RegionName": "一甲里" }, { "RegionCode": "6401200029", "RegionName": "福興里" }, { "RegionCode": "6401200030", "RegionName": "東門里" }, { "RegionCode": "6401200031", "RegionName": "瑞興里" }, { "RegionCode": "6401200032", "RegionName": "天興里" }, { "RegionCode": "6401200033", "RegionName": "新強里" }, { "RegionCode": "6401200034", "RegionName": "國泰里" }, { "RegionCode": "6401200035", "RegionName": "鳳東里" }, { "RegionCode": "6401200036", "RegionName": "新富里" }, { "RegionCode": "6401200037", "RegionName": "國光里" }, { "RegionCode": "6401200038", "RegionName": "國隆里" }, { "RegionCode": "6401200039", "RegionName": "文德里" }, { "RegionCode": "6401200040", "RegionName": "過埤里" }, { "RegionCode": "6401200041", "RegionName": "曹公里" }, { "RegionCode": "6401200042", "RegionName": "興仁里" }, { "RegionCode": "6401200043", "RegionName": "五福里" }, { "RegionCode": "6401200044", "RegionName": "忠孝里" }, { "RegionCode": "6401200045", "RegionName": "生明里" }, { "RegionCode": "6401200046", "RegionName": "和興里" }, { "RegionCode": "6401200047", "RegionName": "協和里" }, { "RegionCode": "6401200048", "RegionName": "文山里" }, { "RegionCode": "6401200049", "RegionName": "福誠里" }, { "RegionCode": "6401200050", "RegionName": "誠德里" }, { "RegionCode": "6401200051", "RegionName": "三民里" }, { "RegionCode": "6401200052", "RegionName": "誠正里" }, { "RegionCode": "6401200053", "RegionName": "北門里" }, { "RegionCode": "6401200054", "RegionName": "富甲里" }, { "RegionCode": "6401200055", "RegionName": "南成里" }, { "RegionCode": "6401200056", "RegionName": "文華里" }, { "RegionCode": "6401200057", "RegionName": "大德里" }, { "RegionCode": "6401200058", "RegionName": "武松里" }, { "RegionCode": "6401200059", "RegionName": "文衡里" }, { "RegionCode": "6401200060", "RegionName": "文福里" }, { "RegionCode": "6401200061", "RegionName": "誠信里" }, { "RegionCode": "6401200062", "RegionName": "誠智里" }, { "RegionCode": "6401200063", "RegionName": "國富里" }, { "RegionCode": "6401200064", "RegionName": "武慶里" }, { "RegionCode": "6401200065", "RegionName": "海洋里" }, { "RegionCode": "6401200066", "RegionName": "新武里" }, { "RegionCode": "6401200067", "RegionName": "新樂里" }, { "RegionCode": "6401200068", "RegionName": "新泰里" }, { "RegionCode": "6401200069", "RegionName": "中崙里" }, { "RegionCode": "6401200070", "RegionName": "中榮里" }, { "RegionCode": "6401200071", "RegionName": "中民里" }, { "RegionCode": "6401200072", "RegionName": "二甲里" }, { "RegionCode": "6401200073", "RegionName": "龍成里" }, { "RegionCode": "6401200074", "RegionName": "富榮里" }, { "RegionCode": "6401200075", "RegionName": "善美里" }, { "RegionCode": "6401200076", "RegionName": "南和里" }, { "RegionCode": "6401200077", "RegionName": "福祥里" }, { "RegionCode": "6401200078", "RegionName": "保安里" }];
        case '6401300000':
            return [{ "RegionCode": "6401300001", "RegionName": "東林里" }, { "RegionCode": "6401300002", "RegionName": "林園里" }, { "RegionCode": "6401300003", "RegionName": "溪州里" }, { "RegionCode": "6401300004", "RegionName": "潭頭里" }, { "RegionCode": "6401300005", "RegionName": "中厝里" }, { "RegionCode": "6401300006", "RegionName": "中門里" }, { "RegionCode": "6401300007", "RegionName": "頂厝里" }, { "RegionCode": "6401300008", "RegionName": "港埔里" }, { "RegionCode": "6401300009", "RegionName": "西溪里" }, { "RegionCode": "6401300010", "RegionName": "港嘴里" }, { "RegionCode": "6401300011", "RegionName": "北汕里" }, { "RegionCode": "6401300012", "RegionName": "林內里" }, { "RegionCode": "6401300013", "RegionName": "王公里" }, { "RegionCode": "6401300014", "RegionName": "林家里" }, { "RegionCode": "6401300015", "RegionName": "龔厝里" }, { "RegionCode": "6401300016", "RegionName": "鳳芸里" }, { "RegionCode": "6401300017", "RegionName": "中芸里" }, { "RegionCode": "6401300018", "RegionName": "東汕里" }, { "RegionCode": "6401300019", "RegionName": "西汕里" }, { "RegionCode": "6401300020", "RegionName": "仁愛里" }, { "RegionCode": "6401300021", "RegionName": "文賢里" }, { "RegionCode": "6401300022", "RegionName": "廣應里" }, { "RegionCode": "6401300023", "RegionName": "五福里" }, { "RegionCode": "6401300024", "RegionName": "中汕里" }];
        case '6401400000':
            return [{ "RegionCode": "6401400001", "RegionName": "拷潭里" }, { "RegionCode": "6401400002", "RegionName": "內坑里" }, { "RegionCode": "6401400003", "RegionName": "大寮里" }, { "RegionCode": "6401400004", "RegionName": "上寮里" }, { "RegionCode": "6401400005", "RegionName": "三隆里" }, { "RegionCode": "6401400006", "RegionName": "琉球里" }, { "RegionCode": "6401400007", "RegionName": "翁園里" }, { "RegionCode": "6401400008", "RegionName": "前庄里" }, { "RegionCode": "6401400009", "RegionName": "中庄里" }, { "RegionCode": "6401400010", "RegionName": "後庄里" }, { "RegionCode": "6401400011", "RegionName": "義仁里" }, { "RegionCode": "6401400012", "RegionName": "新厝里" }, { "RegionCode": "6401400013", "RegionName": "過溪里" }, { "RegionCode": "6401400014", "RegionName": "潮寮里" }, { "RegionCode": "6401400015", "RegionName": "會結里" }, { "RegionCode": "6401400016", "RegionName": "會社里" }, { "RegionCode": "6401400017", "RegionName": "山頂里" }, { "RegionCode": "6401400018", "RegionName": "忠義里" }, { "RegionCode": "6401400019", "RegionName": "永芳里" }, { "RegionCode": "6401400020", "RegionName": "義和里" }, { "RegionCode": "6401400021", "RegionName": "溪寮里" }, { "RegionCode": "6401400022", "RegionName": "江山里" }, { "RegionCode": "6401400023", "RegionName": "昭明里" }, { "RegionCode": "6401400024", "RegionName": "光武里" }, { "RegionCode": "6401400025", "RegionName": "中興里" }];
        case '6401500000':
            return [{ "RegionCode": "6401500001", "RegionName": "竹寮里" }, { "RegionCode": "6401500002", "RegionName": "九曲里" }, { "RegionCode": "6401500003", "RegionName": "久堂里" }, { "RegionCode": "6401500004", "RegionName": "水安里" }, { "RegionCode": "6401500005", "RegionName": "水寮里" }, { "RegionCode": "6401500006", "RegionName": "檨腳里" }, { "RegionCode": "6401500007", "RegionName": "興山里" }, { "RegionCode": "6401500008", "RegionName": "和山里" }, { "RegionCode": "6401500009", "RegionName": "姑山里" }, { "RegionCode": "6401500010", "RegionName": "大坑里" }, { "RegionCode": "6401500011", "RegionName": "井腳里" }, { "RegionCode": "6401500012", "RegionName": "小坪里" }, { "RegionCode": "6401500013", "RegionName": "龍目里" }, { "RegionCode": "6401500014", "RegionName": "大樹里" }, { "RegionCode": "6401500015", "RegionName": "三和里" }, { "RegionCode": "6401500016", "RegionName": "溪埔里" }, { "RegionCode": "6401500017", "RegionName": "興田里" }, { "RegionCode": "6401500018", "RegionName": "統嶺里" }];
        case '6401600000':
            return [{ "RegionCode": "6401600001", "RegionName": "嘉誠里" }, { "RegionCode": "6401600002", "RegionName": "保社里" }, { "RegionCode": "6401600003", "RegionName": "大社里" }, { "RegionCode": "6401600004", "RegionName": "翠屏里" }, { "RegionCode": "6401600005", "RegionName": "三奶里" }, { "RegionCode": "6401600006", "RegionName": "觀音里" }, { "RegionCode": "6401600007", "RegionName": "神農里" }, { "RegionCode": "6401600008", "RegionName": "中里里" }, { "RegionCode": "6401600009", "RegionName": "保安里" }];
        case '6401700000':
            return [{ "RegionCode": "6401700001", "RegionName": "大灣里" }, { "RegionCode": "6401700002", "RegionName": "灣內里" }, { "RegionCode": "6401700003", "RegionName": "考潭里" }, { "RegionCode": "6401700004", "RegionName": "烏林里" }, { "RegionCode": "6401700005", "RegionName": "仁福里" }, { "RegionCode": "6401700006", "RegionName": "仁武里" }, { "RegionCode": "6401700007", "RegionName": "文武里" }, { "RegionCode": "6401700008", "RegionName": "竹後里" }, { "RegionCode": "6401700009", "RegionName": "八卦里" }, { "RegionCode": "6401700010", "RegionName": "高楠里" }, { "RegionCode": "6401700011", "RegionName": "後安里" }, { "RegionCode": "6401700012", "RegionName": "中華里" }, { "RegionCode": "6401700013", "RegionName": "五和里" }, { "RegionCode": "6401700014", "RegionName": "仁和里" }, { "RegionCode": "6401700015", "RegionName": "赤山里" }, { "RegionCode": "6401700016", "RegionName": "仁慈里" }];
        case '6401800000':
            return [{ "RegionCode": "6401800001", "RegionName": "鳥松里" }, { "RegionCode": "6401800002", "RegionName": "夢裡里" }, { "RegionCode": "6401800003", "RegionName": "大華里" }, { "RegionCode": "6401800004", "RegionName": "(水土)埔里" }, { "RegionCode": "6401800005", "RegionName": "仁美里" }, { "RegionCode": "6401800006", "RegionName": "大竹里" }, { "RegionCode": "6401800007", "RegionName": "華美里" }];
        case '6401900000':
            return [{ "RegionCode": "6401900001", "RegionName": "平安里" }, { "RegionCode": "6401900002", "RegionName": "岡山里" }, { "RegionCode": "6401900003", "RegionName": "壽天里" }, { "RegionCode": "6401900004", "RegionName": "維仁里" }, { "RegionCode": "6401900005", "RegionName": "後紅里" }, { "RegionCode": "6401900006", "RegionName": "大遼里" }, { "RegionCode": "6401900007", "RegionName": "忠孝里" }, { "RegionCode": "6401900008", "RegionName": "和平里" }, { "RegionCode": "6401900009", "RegionName": "前峰里" }, { "RegionCode": "6401900010", "RegionName": "劉厝里" }, { "RegionCode": "6401900011", "RegionName": "協和里" }, { "RegionCode": "6401900012", "RegionName": "後協里" }, { "RegionCode": "6401900013", "RegionName": "信義里" }, { "RegionCode": "6401900014", "RegionName": "潭底里" }, { "RegionCode": "6401900015", "RegionName": "三和里" }, { "RegionCode": "6401900016", "RegionName": "仁壽里" }, { "RegionCode": "6401900017", "RegionName": "碧紅里" }, { "RegionCode": "6401900018", "RegionName": "程香里" }, { "RegionCode": "6401900019", "RegionName": "竹圍里" }, { "RegionCode": "6401900020", "RegionName": "台上里" }, { "RegionCode": "6401900021", "RegionName": "灣裡里" }, { "RegionCode": "6401900022", "RegionName": "白米里" }, { "RegionCode": "6401900023", "RegionName": "石潭里" }, { "RegionCode": "6401900024", "RegionName": "福興里" }, { "RegionCode": "6401900025", "RegionName": "本洲里" }, { "RegionCode": "6401900026", "RegionName": "嘉興里" }, { "RegionCode": "6401900027", "RegionName": "嘉峰里" }, { "RegionCode": "6401900028", "RegionName": "華崗里" }, { "RegionCode": "6401900029", "RegionName": "大莊里" }, { "RegionCode": "6401900030", "RegionName": "協榮里" }, { "RegionCode": "6401900031", "RegionName": "為隨里" }, { "RegionCode": "6401900032", "RegionName": "壽峰里" }, { "RegionCode": "6401900033", "RegionName": "仁義里" }];
        case '6402000000':
            return [{ "RegionCode": "6402000001", "RegionName": "橋頭里" }, { "RegionCode": "6402000002", "RegionName": "橋南里" }, { "RegionCode": "6402000003", "RegionName": "仕隆里" }, { "RegionCode": "6402000004", "RegionName": "仕豐里" }, { "RegionCode": "6402000005", "RegionName": "芋寮里" }, { "RegionCode": "6402000006", "RegionName": "東林里" }, { "RegionCode": "6402000007", "RegionName": "西林里" }, { "RegionCode": "6402000008", "RegionName": "白樹里" }, { "RegionCode": "6402000009", "RegionName": "筆秀里" }, { "RegionCode": "6402000010", "RegionName": "新莊里" }, { "RegionCode": "6402000011", "RegionName": "甲北里" }, { "RegionCode": "6402000012", "RegionName": "甲南里" }, { "RegionCode": "6402000013", "RegionName": "頂鹽里" }, { "RegionCode": "6402000014", "RegionName": "中崎里" }, { "RegionCode": "6402000015", "RegionName": "仕和里" }, { "RegionCode": "6402000016", "RegionName": "德松里" }, { "RegionCode": "6402000017", "RegionName": "三德里" }];
        case '6402100000':
            return [{ "RegionCode": "6402100001", "RegionName": "尖山里" }, { "RegionCode": "6402100002", "RegionName": "瓊林里" }, { "RegionCode": "6402100003", "RegionName": "安招里" }, { "RegionCode": "6402100004", "RegionName": "角宿里" }, { "RegionCode": "6402100005", "RegionName": "鳳雄里" }, { "RegionCode": "6402100006", "RegionName": "金山里" }, { "RegionCode": "6402100007", "RegionName": "東燕里" }, { "RegionCode": "6402100008", "RegionName": "南燕里" }, { "RegionCode": "6402100009", "RegionName": "西燕里" }, { "RegionCode": "6402100010", "RegionName": "橫山里" }, { "RegionCode": "6402100011", "RegionName": "深水里" }];
        case '6402200000':
            return [{ "RegionCode": "6402200001", "RegionName": "鹿埔里" }, { "RegionCode": "6402200002", "RegionName": "南安里" }, { "RegionCode": "6402200003", "RegionName": "大同里" }, { "RegionCode": "6402200004", "RegionName": "田寮里" }, { "RegionCode": "6402200005", "RegionName": "七星里" }, { "RegionCode": "6402200006", "RegionName": "崇德里" }, { "RegionCode": "6402200007", "RegionName": "西德里" }, { "RegionCode": "6402200008", "RegionName": "三和里" }, { "RegionCode": "6402200009", "RegionName": "古亭里" }, { "RegionCode": "6402200010", "RegionName": "新興里" }];
        case '6402300000':
            return [{ "RegionCode": "6402300001", "RegionName": "石安里" }, { "RegionCode": "6402300002", "RegionName": "中路里" }, { "RegionCode": "6402300003", "RegionName": "峰山里" }, { "RegionCode": "6402300004", "RegionName": "港後里" }, { "RegionCode": "6402300005", "RegionName": "崗山里" }, { "RegionCode": "6402300006", "RegionName": "阿蓮里" }, { "RegionCode": "6402300007", "RegionName": "清蓮里" }, { "RegionCode": "6402300008", "RegionName": "和蓮里" }, { "RegionCode": "6402300009", "RegionName": "青旗里" }, { "RegionCode": "6402300010", "RegionName": "復安里" }, { "RegionCode": "6402300011", "RegionName": "玉庫里" }, { "RegionCode": "6402300012", "RegionName": "南蓮里" }];
        case '6402400000':
            return [{ "RegionCode": "6402400001", "RegionName": "竹滬里" }, { "RegionCode": "6402400002", "RegionName": "頂寮里" }, { "RegionCode": "6402400003", "RegionName": "新達里" }, { "RegionCode": "6402400004", "RegionName": "後鄉里" }, { "RegionCode": "6402400005", "RegionName": "北嶺里" }, { "RegionCode": "6402400006", "RegionName": "社西里" }, { "RegionCode": "6402400007", "RegionName": "甲北里" }, { "RegionCode": "6402400008", "RegionName": "甲南里" }, { "RegionCode": "6402400009", "RegionName": "下坑里" }, { "RegionCode": "6402400010", "RegionName": "竹園里" }, { "RegionCode": "6402400011", "RegionName": "竹東里" }, { "RegionCode": "6402400012", "RegionName": "竹西里" }, { "RegionCode": "6402400013", "RegionName": "文北里" }, { "RegionCode": "6402400014", "RegionName": "文南里" }, { "RegionCode": "6402400015", "RegionName": "三爺里" }, { "RegionCode": "6402400016", "RegionName": "鴨寮里" }, { "RegionCode": "6402400017", "RegionName": "社東里" }, { "RegionCode": "6402400018", "RegionName": "社中里" }, { "RegionCode": "6402400019", "RegionName": "竹南里" }, { "RegionCode": "6402400020", "RegionName": "社南里" }];
        case '6402500000':
            return [{ "RegionCode": "6402500001", "RegionName": "海山里" }, { "RegionCode": "6402500002", "RegionName": "劉家里" }, { "RegionCode": "6402500003", "RegionName": "太爺里" }, { "RegionCode": "6402500004", "RegionName": "公館里" }, { "RegionCode": "6402500005", "RegionName": "葉厝里" }, { "RegionCode": "6402500006", "RegionName": "大湖里" }, { "RegionCode": "6402500007", "RegionName": "田尾里" }, { "RegionCode": "6402500008", "RegionName": "湖內里" }, { "RegionCode": "6402500009", "RegionName": "海埔里" }, { "RegionCode": "6402500010", "RegionName": "文賢里" }, { "RegionCode": "6402500011", "RegionName": "中賢里" }, { "RegionCode": "6402500012", "RegionName": "逸賢里" }, { "RegionCode": "6402500013", "RegionName": "忠興里" }, { "RegionCode": "6402500014", "RegionName": "湖東里" }];
        case '6402600000':
            return [{ "RegionCode": "6402600001", "RegionName": "福德里" }, { "RegionCode": "6402600002", "RegionName": "萬福里" }, { "RegionCode": "6402600003", "RegionName": "白雲里" }, { "RegionCode": "6402600004", "RegionName": "嘉賜里" }, { "RegionCode": "6402600005", "RegionName": "嘉安里" }, { "RegionCode": "6402600006", "RegionName": "嘉定里" }, { "RegionCode": "6402600007", "RegionName": "保定里" }, { "RegionCode": "6402600008", "RegionName": "光定里" }, { "RegionCode": "6402600009", "RegionName": "大定里" }, { "RegionCode": "6402600010", "RegionName": "吉定里" }, { "RegionCode": "6402600011", "RegionName": "嘉樂里" }, { "RegionCode": "6402600012", "RegionName": "嘉泰里" }, { "RegionCode": "6402600013", "RegionName": "嘉福里" }, { "RegionCode": "6402600014", "RegionName": "和協里" }, { "RegionCode": "6402600015", "RegionName": "崎漏里" }];
        case '6402700000':
            return [{ "RegionCode": "6402700001", "RegionName": "永安里" }, { "RegionCode": "6402700002", "RegionName": "永華里" }, { "RegionCode": "6402700003", "RegionName": "新港里" }, { "RegionCode": "6402700004", "RegionName": "鹽田里" }, { "RegionCode": "6402700005", "RegionName": "保寧里" }, { "RegionCode": "6402700006", "RegionName": "維新里" }];
        case '6402800000':
            return [{ "RegionCode": "6402800001", "RegionName": "光和里" }, { "RegionCode": "6402800002", "RegionName": "彌靖里" }, { "RegionCode": "6402800003", "RegionName": "彌仁里" }, { "RegionCode": "6402800004", "RegionName": "彌壽里" }, { "RegionCode": "6402800005", "RegionName": "彌陀里" }, { "RegionCode": "6402800006", "RegionName": "舊港里" }, { "RegionCode": "6402800007", "RegionName": "文安里" }, { "RegionCode": "6402800008", "RegionName": "鹽埕里" }, { "RegionCode": "6402800009", "RegionName": "過港里" }, { "RegionCode": "6402800010", "RegionName": "海尾里" }, { "RegionCode": "6402800011", "RegionName": "漯底里" }, { "RegionCode": "6402800012", "RegionName": "南寮里" }];
        case '6402900000':
            return [{ "RegionCode": "6402900001", "RegionName": "梓信里" }, { "RegionCode": "6402900002", "RegionName": "梓義里" }, { "RegionCode": "6402900003", "RegionName": "梓和里" }, { "RegionCode": "6402900004", "RegionName": "梓平里" }, { "RegionCode": "6402900005", "RegionName": "中崙里" }, { "RegionCode": "6402900006", "RegionName": "赤崁里" }, { "RegionCode": "6402900007", "RegionName": "禮蚵里" }, { "RegionCode": "6402900008", "RegionName": "智蚵里" }, { "RegionCode": "6402900009", "RegionName": "信蚵里" }, { "RegionCode": "6402900010", "RegionName": "同安里" }, { "RegionCode": "6402900011", "RegionName": "大舍里" }, { "RegionCode": "6402900012", "RegionName": "赤東里" }, { "RegionCode": "6402900013", "RegionName": "赤西里" }, { "RegionCode": "6402900014", "RegionName": "茄苳里" }, { "RegionCode": "6402900015", "RegionName": "典寶里" }];
        case '6403000000':
            return [{ "RegionCode": "6403000001", "RegionName": "太平里" }, { "RegionCode": "6403000002", "RegionName": "大德里" }, { "RegionCode": "6403000003", "RegionName": "湄洲里" }, { "RegionCode": "6403000004", "RegionName": "圓富里" }, { "RegionCode": "6403000005", "RegionName": "中正里" }, { "RegionCode": "6403000006", "RegionName": "大林里" }, { "RegionCode": "6403000007", "RegionName": "上洲里" }, { "RegionCode": "6403000008", "RegionName": "新光里" }, { "RegionCode": "6403000009", "RegionName": "南勝里" }, { "RegionCode": "6403000010", "RegionName": "中寮里" }, { "RegionCode": "6403000011", "RegionName": "東平里" }, { "RegionCode": "6403000012", "RegionName": "東昌里" }, { "RegionCode": "6403000013", "RegionName": "竹峰里" }, { "RegionCode": "6403000014", "RegionName": "瑞吉里" }, { "RegionCode": "6403000015", "RegionName": "永和里" }, { "RegionCode": "6403000016", "RegionName": "三協里" }, { "RegionCode": "6403000017", "RegionName": "鯤洲里" }, { "RegionCode": "6403000018", "RegionName": "大山里" }, { "RegionCode": "6403000019", "RegionName": "中洲里" }, { "RegionCode": "6403000020", "RegionName": "南洲里" }, { "RegionCode": "6403000021", "RegionName": "廣福里" }];
        case '6403100000':
            return [{ "RegionCode": "6403100001", "RegionName": "福安里" }, { "RegionCode": "6403100002", "RegionName": "合和里" }, { "RegionCode": "6403100003", "RegionName": "祿興里" }, { "RegionCode": "6403100004", "RegionName": "中壇里" }, { "RegionCode": "6403100005", "RegionName": "德興里" }, { "RegionCode": "6403100006", "RegionName": "龍山里" }, { "RegionCode": "6403100007", "RegionName": "獅山里" }, { "RegionCode": "6403100008", "RegionName": "龍肚里" }, { "RegionCode": "6403100009", "RegionName": "廣德里" }, { "RegionCode": "6403100010", "RegionName": "興隆里" }, { "RegionCode": "6403100011", "RegionName": "中圳里" }, { "RegionCode": "6403100012", "RegionName": "東門里" }, { "RegionCode": "6403100013", "RegionName": "泰安里" }, { "RegionCode": "6403100014", "RegionName": "瀰濃里" }, { "RegionCode": "6403100015", "RegionName": "清水里" }, { "RegionCode": "6403100016", "RegionName": "吉洋里" }, { "RegionCode": "6403100017", "RegionName": "吉和里" }, { "RegionCode": "6403100018", "RegionName": "吉東里" }, { "RegionCode": "6403100019", "RegionName": "廣林里" }];
        case '6403200000':
            return [{ "RegionCode": "6403200001", "RegionName": "新威里" }, { "RegionCode": "6403200002", "RegionName": "新興里" }, { "RegionCode": "6403200003", "RegionName": "新寮里" }, { "RegionCode": "6403200004", "RegionName": "新發里" }, { "RegionCode": "6403200005", "RegionName": "荖濃里" }, { "RegionCode": "6403200006", "RegionName": "六龜里" }, { "RegionCode": "6403200007", "RegionName": "義寶里" }, { "RegionCode": "6403200008", "RegionName": "興龍里" }, { "RegionCode": "6403200009", "RegionName": "中興里" }, { "RegionCode": "6403200010", "RegionName": "寶來里" }, { "RegionCode": "6403200011", "RegionName": "文武里" }, { "RegionCode": "6403200012", "RegionName": "大津里" }];
        case '6403300000':
            return [{ "RegionCode": "6403300001", "RegionName": "東安里" }, { "RegionCode": "6403300002", "RegionName": "西安里" }, { "RegionCode": "6403300003", "RegionName": "和安里" }, { "RegionCode": "6403300004", "RegionName": "大田里" }, { "RegionCode": "6403300005", "RegionName": "寶隆里" }, { "RegionCode": "6403300006", "RegionName": "關山里" }, { "RegionCode": "6403300007", "RegionName": "小林里" }];
        case '6403400000':
            return [{ "RegionCode": "6403400001", "RegionName": "杉林里" }, { "RegionCode": "6403400002", "RegionName": "木梓里" }, { "RegionCode": "6403400003", "RegionName": "集來里" }, { "RegionCode": "6403400004", "RegionName": "新庄里" }, { "RegionCode": "6403400005", "RegionName": "上平里" }, { "RegionCode": "6403400006", "RegionName": "月眉里" }, { "RegionCode": "6403400007", "RegionName": "月美里" }];
        case '6403500000':
            return [{ "RegionCode": "6403500001", "RegionName": "溝坪里" }, { "RegionCode": "6403500002", "RegionName": "金竹里" }, { "RegionCode": "6403500003", "RegionName": "永富里" }, { "RegionCode": "6403500004", "RegionName": "永吉里" }, { "RegionCode": "6403500005", "RegionName": "永興里" }, { "RegionCode": "6403500006", "RegionName": "石坑里" }, { "RegionCode": "6403500007", "RegionName": "內門里" }, { "RegionCode": "6403500008", "RegionName": "內豊里" }, { "RegionCode": "6403500009", "RegionName": "觀亭里" }, { "RegionCode": "6403500010", "RegionName": "中埔里" }, { "RegionCode": "6403500011", "RegionName": "內東里" }, { "RegionCode": "6403500012", "RegionName": "內南里" }, { "RegionCode": "6403500013", "RegionName": "東埔里" }, { "RegionCode": "6403500014", "RegionName": "三平里" }, { "RegionCode": "6403500015", "RegionName": "木柵里" }, { "RegionCode": "6403500016", "RegionName": "內興里" }, { "RegionCode": "6403500017", "RegionName": "瑞山里" }, { "RegionCode": "6403500018", "RegionName": "光興里" }];
        case '6403600000':
            return [{ "RegionCode": "6403600001", "RegionName": "茂林里" }, { "RegionCode": "6403600002", "RegionName": "萬山里" }, { "RegionCode": "6403600003", "RegionName": "多納里" }];
        case '6403700000':
            return [{ "RegionCode": "6403700001", "RegionName": "桃源里" }, { "RegionCode": "6403700002", "RegionName": "寶山里" }, { "RegionCode": "6403700003", "RegionName": "建山里" }, { "RegionCode": "6403700004", "RegionName": "高中里" }, { "RegionCode": "6403700005", "RegionName": "勤和里" }, { "RegionCode": "6403700006", "RegionName": "復興里" }, { "RegionCode": "6403700007", "RegionName": "拉芙蘭里" }, { "RegionCode": "6403700008", "RegionName": "梅山里" }];
        case '6403800000':
            return [{ "RegionCode": "6403800001", "RegionName": "達卡努瓦里" }, { "RegionCode": "6403800002", "RegionName": "瑪雅里" }, { "RegionCode": "6403800003", "RegionName": "南沙魯里" }];
        default:
            return [];
    }
};
//# sourceMappingURL=area.js.map

/***/ }),

/***/ "../../../../../src/app/report/modules/custom-validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateEmail; });
/**
 * Created by matty on 2016/11/15.
 */
/**
 * Created by matty on 2016/11/15.
 */ var validateEmail = function (email) {
    var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
};
//# sourceMappingURL=custom-validation.js.map

/***/ }),

/***/ "../../../../../src/app/report/modules/file-checker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkFilesSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkTotalFilesSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return checkFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkExtName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkFilenameIsExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return joinUploadedFileName; });
/**
 * Created by mattyyzac on 2016/11/14.
 */
var _this = this;
/*
 * check single file size
 * ok = true,
 * > 10MB = false
 *
 * */
/**
 * Created by mattyyzac on 2016/11/14.
 */ var checkFilesSize = function (f) {
    var limit = 10485760; // 10MB = 10 * 1024 * 1024
    var ret = f.size <= limit;
    if (!ret) {
        alert("'" + f.name + "' \u8D85\u904E\u55AE\u6A94 10MB \u4E0A\u9650");
    }
    return ret;
};
/*
 * check total files size
 * ok = true
 * >20MB = false
 *
 * */
var checkTotalFilesSize = function (f) {
    var limit = 20971520; //20MB = 20 * 1024 * 1024
    var tsize = 0;
    for (var i = 0; i < f.length; i++) {
        tsize += f[i].size;
    }
    var ret = tsize <= limit;
    if (!ret) {
        alert('上傳檔案超過總合 20MB 上限');
    }
    return ret;
};
/*
 * check file name contains a ;
 * ok = true;
 * has ; = false;
 *
 * */
var checkFileName = function (f) {
    var name = '';
    if (f.name.split('.')[0])
        name = f.name.split('.')[0];
    var ret = name.indexOf(';') == -1;
    if (!ret) {
        alert("'" + f.name + "' \u6A94\u540D\u5305\u542B ; \u5206\u865F");
    }
    return ret;
};
/*
 * check file's ext name
 * ok = true
 *
 * */
var checkExtName = function (f) {
    var extName = '';
    if (f.name.toLowerCase().split('.'))
        extName = f.name.split('.').pop();
    var available = ['doc', 'docx', 'xls', 'xlsx',
        'pdf', 'txt',
        'bmp', 'jpg', 'jpeg', 'gif', 'png', 'odt', 'ods',
        'zip', 'avi', 'mp4', 'wav', 'wma', 'wmv'];
    var ret = available.indexOf(extName.toLowerCase()) >= 0;
    if (!ret) {
        alert("'" + f.name + "' \u526F\u6A94\u540D\u4E0D\u5C6C\u65BC\u5141\u8A31\u4E0A\u50B3\u985E\u578B");
    }
    return ret;
};
var checkFilenameIsExist = function (files, container) {
    var temp = [];
    for (var j = 0; j < files.length; j++) {
        var fname = files[j].name;
        for (var i = 0; i < container.length; i++) {
            var sameFileName = container[i].name.indexOf(fname) > -1;
            if (sameFileName) {
                alert("'" + fname + "' \u6A94\u540D\u5DF2\u5B58\u5728\uFF0C\u8ACB\u91CD\u65B0\u9078\u64C7\u6A94\u6848");
                temp = _this.sliceItem(files, j);
                return temp;
            }
        } // i
    } // j
    return files;
};
function sliceItem(fs, delIndex) {
    //wtf! array.splice | slice cannot use here! why?
    var ret = [];
    if (!fs || !delIndex)
        return [];
    for (var i = 0; i < fs.length; i++) {
        if (i !== delIndex) {
            ret.push(fs[i]);
        }
    }
    return ret;
}
var joinUploadedFileName = function (files) {
    var result = '';
    for (var i = 0; i < files.length; i++) {
        result += files[i].name + ';';
    }
    if (result.substring(result.length - 1) === ';') {
        result = result.substring(0, result.length - 1);
    }
    //console.log(result);
    return result;
};
//# sourceMappingURL=file-checker.js.map

/***/ }),

/***/ "../../../../../src/app/report/modules/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area__ = __webpack_require__("../../../../../src/app/report/modules/area.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__area__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__area__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__area__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_validation__ = __webpack_require__("../../../../../src/app/report/modules/custom-validation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_validation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_checker__ = __webpack_require__("../../../../../src/app/report/modules/file-checker.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__file_checker__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__file_checker__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__file_checker__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__file_checker__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__file_checker__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__file_checker__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__key_string__ = __webpack_require__("../../../../../src/app/report/modules/key-string.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__key_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md5__ = __webpack_require__("../../../../../src/app/report/modules/md5.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__md5__["a"]; });
/**
 * Created by matty on 2016/11/15.
 */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/report/modules/key-string.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genCaseToken; });
/**
 * Created by matty on 2016/11/15.
 */
/*
 * generate key string as case token
 *
 * */
/**
 * Created by matty on 2016/11/15.
 */ var genCaseToken = function (length) {
    var text = ''; //final result
    var possibilities = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    for (var i = 0; i < length; i++) {
        text += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
    return text;
};
//# sourceMappingURL=key-string.js.map

/***/ }),

/***/ "../../../../../src/app/report/modules/md5.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md5; });
/**
 * Created by matty on 2016/10/14.
 * ref: https://github.com/ManvendraSK/angular2-quickstart/blob/master/app/md5.ts
 */
/**
 * Created by matty on 2016/10/14.
 * ref: https://github.com/ManvendraSK/angular2-quickstart/blob/master/app/md5.ts
 */ var Md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ "../../../../../src/app/report/report-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"banner row\">\n\t\t<div class=\"banner-page-name\">\n\t\t\t<h2 class=\"dk-green\">寫信給市長</h2>\n\t\t\t<p class=\"dk-green\">Mail to Mayor</p>\n\t\t</div>\n\t\t<img src=\"./assets/images/banner/banner_pic_mail.png\" alt=\"\">\n\t</div>\n\t<div class=\"row\">\n\t\t<form enctype=\"multipart/form-data\" #f=\"ngForm\" (submit)=\"onSubmit(f.value)\">\n\n\t\t\t<div class=\"col-md-5 page-block\">\n\t\t\t\t<div class=\"article-header text-center\">\n\t\t\t\t\t<h4 class=\"article-title\">基本資料</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"article-content\">\n\t\t\t\t\t<p class=\"article-lable require\">姓名 <small class=\"text-orange\"><i class=\"fa fa-asterisk\"></i></small></p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-12\"><input name=\"Sugg_Name\" class=\"fall-width\" type=\"text\" placeholder=\"請填寫您的姓名\" [(ngModel)]=\"Sugg_Name\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"article-lable require maT2x\">電話 <small class=\"text-orange\"><i class=\"fa fa-asterisk\"></i></small></p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-12\"><input name=\"Sugg_Telno\" class=\"fall-width\" type=\"text\" placeholder=\"請填寫您的聯絡電話\" [(ngModel)]=\"Sugg_Telno\"></div>\n\t\t\t\t\t\t<p class=\"col-xs-12 text-gray maT1x\">若要留第二支電話號碼，可於建議事項中註明。</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"article-lable require maT2x\">Email <small class=\"text-orange\"><i class=\"fa fa-asterisk\"></i></small></p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-12\"><input name=\"Sugg_Email\" class=\"fall-width\" type=\"text\" placeholder=\"請填寫您的電子信箱\" [(ngModel)]=\"Sugg_Email\"></div>\n\t\t\t\t\t\t<p class=\"col-xs-12 text-gray maT1x\">\n\t\t\t\t\t\t\tEx: example@example.com<br>\n\t\t\t\t\t\t\t本系統寄發「確認信」及「處理情形通知信」使用。\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"article-lable require maT2x\">地址 <small class=\"text-orange\"><i class=\"fa fa-asterisk\"></i></small></p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4 combine-icon combine-after\">\n\t\t\t\t\t\t\t<input class=\"fall-width\" type=\"text\" [value]=\"Sugg_Addr1_name\" readonly>\n\t\t\t\t\t\t\t<select class=\"input-alpha\" name=\"Sugg_Addr1\" [ngModel]=\"Sugg_Addr1\" (change)=\"onChangeCountyCode($event.target)\">\n                <option value=\"\">{{county_placeholder}}</option>\n                <option *ngFor=\"let item of countyCodes\" value=\"{{item.CountyCode}}\">{{item.CountyName}}</option>\n              </select>\n\t\t\t\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 combine-icon combine-after\">\n\t\t\t\t\t\t\t<input class=\"fall-width\" type=\"text\" [value]=\"Sugg_Addr2_name\" readonly>\n\t\t\t\t\t\t\t<select class=\"input-alpha\" name=\"Sugg_Addr2\" [ngModel]=\"Sugg_Addr2\" (change)=\"onDistrictChanged($event.target)\">\n                  <option value=\"\">{{district_placeholder}}</option>\n                  <option *ngFor=\"let item of districtCodes\" value=\"{{item.DistrictCode}}\">{{item.DistrictName}}</option>\n              </select>\n\t\t\t\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 combine-icon combine-after\">\n\t\t\t\t\t\t\t<input class=\"fall-width\" type=\"text\" [value]=\"Sugg_Addr3_name\" readonly>\n\t\t\t\t\t\t\t<select class=\"input-alpha\" name=\"Sugg_Addr3\" [ngModel]=\"Sugg_Addr3\" (change)=\"onRegionChanged($event.target)\">\n                <option value=\"\">{{region_placeholder}}</option>\n                <option *ngFor=\"let item of regionCodes\" value=\"{{item.RegionCode}}\">{{item.RegionName}}</option>\n              </select>\n\t\t\t\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 maT1x\">\n\t\t\t\t\t\t\t<input name=\"Sugg_Addr4\" class=\"fall-width\" type=\"text\" [placeholder]=\"addr4_placeholder\" [(ngModel)]=\"Sugg_Addr4\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"article-lable require maT2x\">性別 <small class=\"text-orange\"><i class=\"fa fa-asterisk\"></i></small></p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-12 combine-icon combine-after\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"Sugg_Sex\" value=\"1\" (click)=\"Sugg_Sex = '1'\" [ngModel]=\"Sugg_Sex\" />&nbsp;女&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"Sugg_Sex\" value=\"2\" (click)=\"Sugg_Sex = '2'\" [ngModel]=\"Sugg_Sex\" checked=\"true\" />&nbsp;男&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"Sugg_Sex\" value=\"3\" (click)=\"Sugg_Sex = '3'\" [ngModel]=\"Sugg_Sex\" checked=\"true\" />&nbsp;其他\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      </div>\n      <div class=\"col-md-7 page-block\">\n\t\t\t\t<div class=\"article-header text-center\">\n\t\t\t\t\t<h4 id=\"mayor\" class=\"article-title\">檢舉項目</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"article-content  block-separate\">\n\t\t\t\t\t<div class=\"col-md-6 maB1x\">\n\t\t\t\t\t\t<p class=\"article-lable require\">主項目</p>\n\t\t\t\t\t\t<div class=\"row maB1x\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t<input class=\"fall-width\" type=\"text\" *ngIf=\"caseType\" value=\"{{caseType.Item}} {{caseType.ItemName}}\" readonly />\n\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"Subj_Item\" *ngIf=\"caseType\" value=\"{{caseType.Item}}\" [ngModel]=\"Subj_Item\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 maB1x\">\n\t\t\t\t\t\t<p class=\"article-lable require\">子項目 </p>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t<input class=\"fall-width\" type=\"text\" *ngIf=\"subCaseType\" value=\"{{subCaseType.Subitem}} {{subCaseType.SubitemName}}\" readonly />\n\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"Subj_Subitem\" *ngIf=\"subCaseType\" value=\"{{subCaseType.Subitem}}\" [ngModel]=\"Subj_Subitem\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 maB1x\">\n\t\t\t\t\t\t<p class=\"article-lable require\">行政區 <small class=\"text-orange\"><i class=\"fa fa-asterisk\"></i></small></p>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-5 combine-icon combine-after\">\n\t\t\t\t\t\t\t\t<input class=\"fall-width\" type=\"text\" [value]=\"Subj_District_name\">\n\t\t\t\t\t\t\t\t<select class=\"input-alpha\" name=\"Subj_District\" [ngModel]=\"Subj_District\" (change)=\"onChangeAreaCodes($event.target)\">\n\t\t\t\t\t\t\t\t\t<option value=\"\">所屬行政區</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of areaCodes\" value=\"{{item.DistrictCode}}\" [selected]=\"item.DistrictName === Subj_District_name\">{{item.DistrictName}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\n              </div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n                <!-- <input class=\"fall-width\" type=\"text\" placeholder=\"緯度 23.481315\">\n\t\t\t\t\t\t\t\t<input class=\"fall-width\" type=\"text\" placeholder=\"經度 120.4524993\"> -->\n                <input name=\"geoAddress\" class=\"fall-width\" type=\"text\" placeholder=\"請點選地圖位置取讀您正確的位置\" [(ngModel)]=\"geoAddress\">\n              </div>\n              <div class=\"col-md-12\">\n                <p class=\"text-orange\">可點選地圖，取得離您較近的區域。</p>\n              </div>\n              <div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<agm-map *ngIf=\"coords\" [latitude]=\"coords.latitude\" [longitude]=\"coords.longitude\" [zoom]=\"18\" (mapClick)=\"changeMarker($event)\">\n\t\t\t\t\t\t\t\t\t<agm-marker [latitude]=\"coords.latitude\" [longitude]=\"coords.longitude\"></agm-marker>\n\t\t\t\t\t\t\t\t</agm-map>\n              </div>\n\t\t\t\t\t\t\t<p class=\"col-md-12 text-gray\"><br>請選擇建議事項內容所屬高雄行政區，若內容無法分區或其他縣市事項請選擇「無法分區」</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 maB1x\">\n\t\t\t\t\t\t\t<p class=\"article-lable require\">建議事項 <small class=\"text-orange\"><i class=\"fa fa-asterisk\"></i></small></p>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<textarea name=\"Subj_Content\" class=\"fall-width\" rows=\"8\" placeholder=\"請填寫建議事項\" [(ngModel)]=\"Subj_Content\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t<p class=\"col-md-12 text-gray\"><br>為避免送出失敗造成「建議內容」遺失，請先備份「建議內容」!!!</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 maB1x\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t<p class=\"article-lable require maT1x\">附件</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-green\" href=\"javascript:void(0);\">選擇檔案<input class=\"input-alpha\" type=\"file\" multiple=\"true\" name=\"\" value=\"\" (change)=\"addFile()\" #fileInput></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 navy\">\n\t\t\t\t\t\t\t\t</div>\n                <div class=\"col-md-12 text-gray\">\n                  <br>\n                  <p *ngFor=\"let item of uploadFiles\"><i class=\"fa fa-paperclip\"></i> {{ item.name }}</p>\n                  <hr/>\n                  <small>*每個上傳檔案大小限制為10ＭＢ，總上傳容量上限20ＭＢ，檔名建議使用半形英數字(A-Z,a-z,0-9)命名。 <br/>\n                  *允許上傳的檔案格式為.doc .docx .xls .xlsx .pdf .txt .bmp .jpg .gif .odt .ods .avi .mp4 .wav .wma .wmv\n                  ，其餘格式請壓縮成zip檔再上傳！</small>\n                </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"hidden\" value=\"{{Case_Token}}\" name=\"Case_Token\" [ngModel]=\"Case_Token\" />\n\t\t\t\t\t\t\t<input type=\"hidden\" value=\"0\" name=\"Subj_FileCount\" [ngModel]=\"Subj_FileCount\" />\n\t\t\t\t\t\t\t<input type=\"hidden\" value=\"\" name=\"Atth_FileNames\" [ngModel]=\"Atth_FileNames\" />\n              <input type=\"hidden\" value=\"2\" name=\"Subj_Security\" [ngModel]=\"Subj_Security\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 page-block\">\n\t\t\t\t\t<hr>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-md-offset-4 \">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\"><img style=\"width:100%\" [src]=\"recaptchaImg\" alt=\"驗證碼\" title=\"點擊可重新產生驗證碼\" (click)=\"getValidation()\"></div>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<input class=\"fall-width text-center\" type=\"text\" [(ngModel)]=\"Input_ValidationCode\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"請輸入驗證碼\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 text-center\">\n\t\t\t\t\t\t\t驗證碼不區分大小寫。 <a href=\"javascript:void(0);\" class=\"text-orange\" (click)=\"getValidation()\">重新產生驗證碼？</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2 col-md-offset-4 maT2x\">\n\t\t\t\t\t<input type=\"submit\" class=\"btn btn-orange fall-width\" value=\"填寫完成 \" (click)=\"onSubmitClick()\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2 maT2x\">\n\t\t\t\t\t<input type=\"reset\" class=\"btn btn-grey fall-width\" value=\"取消申報 \" (click)=\"goBack()\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n<div class=\"pop\" style=\"display:block;\" *ngIf=\"getReportDone\">\n\t<div class=\"pop-content\">\n\t\t<div class=\"check\">\n\t\t\t<div class=\"check-panel\">\n\t\t\t\t<div class=\"check-mark\"><i class=\"fa fa-check\"></i></div>\n\t\t\t\t<h4 class=\"check-title navy text-center\">親愛的 {{Sugg_Name}}，您好！</h4>\n\t\t\t\t<br>\n\t\t\t\t<p class=\"check-info navy\">\n\t\t\t\t\t我們已收到您對本府的反映案件，為確認您的信箱未遭冒用，我們即將寄出確認信至您所填寫的：{{Sugg_Email}} 信箱， 請您於收到該確認信後，點選「確認信件」連結，以便完成您的案件反映流程，我們在收到您的確認後，將由系統自動寄出案件編號至您的信箱並立即進行分案處理。\n\t\t\t\t\t謝謝您！\n\t\t\t\t</p>\n\t\t\t\t<h4 class=\"check-footer navy text-center\">高雄市政府市長信箱處理小組 敬上</h4>\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-green\" (click)=\"goBack(true)\">回到首頁</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"pop\" style=\"display:block;\" *ngIf=\"reportAttention\">\n\t<div class=\"pop-content fat-content\">\n\t\t<div class=\"check\">\n\t\t\t<div class=\"check-panel\">\n\t\t\t\t<div class=\"check-mark\"><i class=\"fa fa-check\"></i></div>\n\t\t\t\t<h4 class=\"check-title navy text-center\">市長信箱提醒您</h4>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"check-info navy\">\n\t\t\t\t\t<p>若你現在陳情案件其內容屬市民生命財產安全相關的事項者請速撥打「1999」。<br> -\n\t\t\t\t\t\t<br> 為維護陳情人及被陳情人的權益，並有效運用行政資源，請您提供真實姓名、聯絡方式(市話、行動電話、地址及電子郵件) 及具體內容，方便機關迅速處理，若經查證所留個資並非屬實，辦理機關得不予處理。\n\t\t\t\t\t\t<br> -\n\t\t\t\t\t\t<br> 提醒您冒用他人資料將負法律刑責，依據個人資料保護法，您的個資僅提供本府承辦機關通知聯繫，不另做其他用途使用。 請儘量以一件mail反映一件事情，以利案件處理，若有二件以上事情，請分別發送。建議(檢舉)類別倘有多項， 請選「90\n\t\t\t\t\t\t非屬前述各類的其他事項」。\n\t\t\t\t\t\t<br> -\n\t\t\t\t\t\t<br> 建議事項請求簡潔、明確，並以真實案件為限，本系統不受理非理性情緒發洩、漫罵及惡意檢舉之案件。\n\t\t\t\t\t\t<br> -\n\t\t\t\t\t\t<br> 請於收到系統發出的確認信後７天內進行確認，否則該案件系統將不予受理。\n\t\t\t\t\t\t<br> -\n\t\t\t\t\t\t<br> 案件確定成立後，原則上辦理期限為五個工作天(不含週六、週日及例假日或因天災及其他不可抗力因素所致之停止上班日)， 辦理機關得依案情複雜程度辦理展期。\n\t\t\t\t\t\t<br> -\n\t\t\t\t\t\t<br> 當系統處於定期維護時間每日凌晨01:00~02:00時，主機可能會停止所有服務，如有不便還請見諒。\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<h4 class=\"check-footer navy text-center\">高雄市政府市長信箱處理小組 敬上</h4>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn btn-green\" (click)=\"reportAttention=!reportAttention\">我瞭解了</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/report/report-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pop .pop-content.fat-content {\n  top: 30%; }\n  .pop .pop-content.fat-content .check-info {\n    max-height: 60vh;\n    overflow: auto; }\n\nagm-map {\n  height: 300px; }\n\n@media screen and (min-width: 480px) {\n  .pop .pop-content.fat-content {\n    min-width: 500px;\n    top: 30%; }\n    .pop .pop-content.fat-content .check {\n      width: 470px; }\n    .pop .pop-content.fat-content .check-mark {\n      left: 200px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_case__ = __webpack_require__("../../../../../src/app/shared/case.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_service__ = __webpack_require__("../../../../../src/app/report/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geoAddress_service__ = __webpack_require__("../../../../../src/app/report/geoAddress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geoLocation_service__ = __webpack_require__("../../../../../src/app/report/geoLocation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_service__ = __webpack_require__("../../../../../src/app/report/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_service__ = __webpack_require__("../../../../../src/app/report/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules__ = __webpack_require__("../../../../../src/app/report/modules/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportDetailComponent = (function () {
    function ReportDetailComponent(geoLocationService, geoAddressService, uploadService, areaService, reportService) {
        this.geoLocationService = geoLocationService;
        this.geoAddressService = geoAddressService;
        this.uploadService = uploadService;
        this.areaService = areaService;
        this.reportService = reportService;
        this.navigated = false; // true if navigated here
        this.getReportDone = false;
        this.reportAttention = true;
        this.validateTime = 9 * 60 * 1000;
        this.placeholder = '輸入所在地址';
        this.county_placeholder = '縣市';
        this.district_placeholder = '地區';
        this.region_placeholder = '里別';
        this.addr4_placeholder = '居住地址';
        this.subscribes = []; // put all subscribes into this array, while component ondestroy to unsubscribe them.
        this.Subj_District_name = this.district_placeholder;
        this.Sugg_Addr1_name = this.county_placeholder;
        this.Sugg_Addr2_name = this.district_placeholder;
        this.Sugg_Addr3_name = this.region_placeholder;
        this.uploadFiles = [];
        this.closeReport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.Case_Token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["a" /* genCaseToken */])(12);
        this.areaCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["b" /* DistrictCodesKaohsiung */])(true); // 左側行政區 gps
        this.districtCodes = []; // 右側行政區下拉項目
        this.Subj_District = ''; // default
        this.countyCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["c" /* CountyCodes */])();
        this.regionCodes = [];
        this.Input_ValidationCode = "";
        this.Subj_FileCount = 0;
        this.Atth_FileNames = '';
        this.Subj_Security = '2'; // 保密等級，always 預設為保密 2
        this.Sugg_Sex = '3'; // 性別，預設為其他 3
    }
    ReportDetailComponent.prototype.getValidation = function () {
        var _this = this;
        this.reportService
            .getValidationCode()
            .subscribe(function (recaptcha) {
            _this.recaptchaCode = recaptcha,
                _this.recaptchaImg = "data:image/gif;base64," + recaptcha.ValidationCode;
        });
    };
    ReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.Subj_Item = this.caseType.Item;
        this.Subj_Subitem = this.subCaseType.Subitem;
        this.hasher = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["d" /* Md5 */])(this.genHasherMajorKey());
        this.getValidation();
        setInterval(function () { _this.getValidation(); }, this.validateTime);
        this.getLocation();
    };
    ReportDetailComponent.prototype.goBack = function (directlyRedirect) {
        var emit = this.closeReport.emit();
        if (directlyRedirect === true) {
            emit;
        }
        else {
            if (confirm('確定取消申報?')) {
                this.closeReport.emit();
            }
        }
    };
    ReportDetailComponent.prototype.genHasherMajorKey = function () {
        return this.Subj_Subitem + "-" + this.Case_Token + "-" + this.Subj_Item;
    };
    ReportDetailComponent.prototype.ngOnDestroy = function () {
        this.subscribes.forEach(function (s) { return s.unsubscribe(); });
    };
    ReportDetailComponent.prototype.getLocation = function () {
        var _this = this;
        var opt = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        this.subscribes.push(this.geoLocationService.getLocation(opt).subscribe(function (data) {
            _this.coords = {
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            };
            _this.getAddressData(_this.coords.latitude, _this.coords.longitude);
        }));
    };
    ReportDetailComponent.prototype.getAddressData = function (lat, lng) {
        var _this = this;
        this.subscribes.push(this.geoAddressService.getAddressResult(lat, lng).subscribe(function (data) {
            if (data.results[0] && data.results[0].formatted_address) {
                var addr = data.results[0].formatted_address;
                _this.geoAddress = addr; // 檢舉地址
                _this.Subj_District_name = addr.substring(addr.indexOf('市') + 1, addr.indexOf('區') + 1);
                _this.adjustGpsResolving(_this.Subj_District_name);
            }
        }));
    };
    ReportDetailComponent.prototype.adjustGpsResolving = function (gpsDistrict) {
        var _this = this;
        this.Subj_District = null;
        this.areaCodes.filter(function (data) {
            if (data.DistrictName === gpsDistrict) {
                _this.Subj_District = data.DistrictCode;
            }
        });
        if (!this.Subj_District) {
            this.Subj_District_name = '無法分區';
            this.Subj_District = '6411100000';
        }
    };
    ReportDetailComponent.prototype.changeMarker = function (e) {
        _a = [e.coords.lat, e.coords.lng], this.coords.latitude = _a[0], this.coords.longitude = _a[1];
        this.getAddressData(this.coords.latitude, this.coords.longitude);
        var _a;
    };
    ReportDetailComponent.prototype.addFile = function () {
        var fi = this.fileInput.nativeElement;
        if (fi.files) {
            //console.log(fi.files);
            var refiles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["e" /* checkFilenameIsExist */])(fi.files, this.uploadFiles);
            if (!refiles || refiles.length <= 0)
                return;
            var check = this.checkFiles(refiles);
            if (!check)
                return;
            for (var i = 0; i < refiles.length; i++) {
                this.uploadFiles.push(refiles[i]);
            }
            var upurl = "https://soweb.kcg.gov.tw/webapi/api/AttachFile/Upload/" + this.Case_Token;
            this.subscribes.push(this.uploadService.sendFileRequest(upurl, refiles).subscribe(function (resp) {
                console.log(resp);
            }));
        }
    };
    ReportDetailComponent.prototype.checkFiles = function (files) {
        var r0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["f" /* checkTotalFilesSize */])(files);
        if (!r0)
            return false;
        for (var i = 0; i < files.length; i++) {
            var f = files[i];
            var r1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["g" /* checkFilesSize */])(f);
            if (!r1)
                return false;
            var r2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["h" /* checkFileName */])(f);
            if (!r2)
                return false;
            var r3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["i" /* checkExtName */])(f);
            if (!r3)
                return false;
        }
        return true;
    };
    ReportDetailComponent.prototype.onSubmitClick = function () {
        // 檢查資料、收集資料
        var hidden_hasher = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["d" /* Md5 */])(this.Subj_Subitem + "-" + this.Case_Token + "-" + this.Subj_Item);
        var checkList = [];
        if (hidden_hasher !== this.hasher) {
            checkList.push('主項目或子項目不符合\n-\n'); //此項錯誤，表示主/子項目/CaseToken 的 hidden 內容遭篡改!!
        }
        if (!this.Subj_District) {
            checkList.push('請選擇檢舉地址區域\n-\n');
            //console.log(`Subj_District: ${this.Subj_District}`);
        }
        //console.log(`Subj_Security: ${this.Subj_Security}`);
        if (!this.Subj_Content || this.Subj_Content.length === 0) {
            checkList.push('請填寫建議事項\n-\n');
        }
        // 處理上傳內容
        this.Subj_FileCount = this.uploadFiles.length;
        this.Atth_FileNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["j" /* joinUploadedFileName */])(this.uploadFiles);
        // 上傳附件的資料可能有誤，basically, this will not happen
        if ((this.Subj_FileCount && this.Subj_FileCount > 0) && (!this.Atth_FileNames || this.Atth_FileNames.split(';').length === 0)) {
            //console.log(`Subj_FileCount: ${this.Subj_FileCount}\nAtth_FileNames: ${this.Atth_FileNames}`);
            checkList.push('請重新上傳附件\n-\n');
        }
        // case toekn check
        if (!this.Case_Token || this.Case_Token.length <= 0) {
            //console.log(`Case_Token: ${this.Case_Token}`);
            checkList.push('個案標識資料異常\n-\n');
        }
        if (!this.Sugg_Name || this.Sugg_Name.length < 2) {
            //console.log(`Sugg_Name: ${this.Sugg_Name}`);
            checkList.push('請填寫基本資料姓名\n-\n');
        }
        var phoneExp = /^([0-9]|\*|\#|\(|\)|\-|\s){7,20}$/;
        if (!this.Sugg_Telno || this.Sugg_Telno.search(phoneExp) === -1) {
            //console.log(`Sugg_Telno: ${this.Sugg_Telno}`);
            if (!this.Sugg_Telno) {
                checkList.push('請填寫基本資料電話\n-\n');
            }
            else {
                checkList.push('格式有誤。\n僅接受以下字元*#()- 0-9 等半形字元\n-\n');
            }
        }
        if (!this.Sugg_Email) {
            //console.log(`Sugg_Email: ${this.Sugg_Email}`);
            checkList.push('請填寫基本資料 Email\n-\n');
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["k" /* validateEmail */])(this.Sugg_Email)) {
            checkList.push('基本資料 Email 格式有誤。\n正確格式為 example@example.com\n-\n');
        }
        // 地址1-4
        var value_addr1 = this.Sugg_Addr1;
        //console.log(`Sugg_Addr1: ${this.Sugg_Addr1}`);
        if (!value_addr1 || value_addr1.length === 0) {
            this.Sugg_Addr1 = '';
            checkList.push('基本資料「縣市」為必填\n-\n');
        }
        var value_addr2 = this.Sugg_Addr2;
        //console.log(`Sugg_Addr2: ${this.Sugg_Addr2}`);
        if (!value_addr2 || value_addr2.length === 0) {
            this.Sugg_Addr2 = '';
            checkList.push('基本資料「行政區域」為必填\n-\n');
        }
        // 里別，非必填
        var value_addr3 = this.Sugg_Addr3;
        if (!value_addr3) {
            this.Sugg_Addr3 = '';
        }
        // 確認 行政區、里別 關聯性，錯誤則無法上傳，引發 api 400 error
        //this.Sugg_Addr2 = this.Sugg_Addr3.substring(0, this.Sugg_Addr3.length - 2) + '00';
        // 確認 縣市、行政區、里別 關聯性。可能不太準確，但可以有基本防護
        var county_code_starts3 = this.Sugg_Addr1.substring(0, 3);
        //console.log(`county_code_starts3: ${county_code_starts3}`);
        if (this.Sugg_Addr2 && this.Sugg_Addr2.length > 0 && this.Sugg_Addr2.substring(0, 3) !== county_code_starts3
            || (this.Sugg_Addr3 && this.Sugg_Addr3.length > 0 && this.Sugg_Addr3.substring(0, 3) !== county_code_starts3)) {
            checkList.push('行政選擇有誤，請重新選擇\n-\n');
        }
        //console.log(`Sugg_Addr4: ${this.Sugg_Addr4}`);
        if (!this.Sugg_Addr4) {
            checkList.push('請填寫基本資料，地址路段門牌號碼\n-\n');
        }
        if (this.Input_ValidationCode.length === 0) {
            checkList.push('請填寫驗證碼');
        }
        //console.log(`Sugg_Sex: ${this.Sugg_Sex}`);
        //let formData = `Case_Token=${this.Case_Token}&Atth_FileNames=${this.Atth_FileNames}&Subj_Content=${this.Subj_Content}&Subj_District=${this.Subj_District}&Subj_FileCount=${this.Subj_FileCount}&Subj_Item=${this.Subj_Item}&Subj_Security=${this.Subj_Security}&Subj_Subitem=${this.Subj_Subitem}&Sugg_Addr1=${this.Sugg_Addr1}&Sugg_Addr2=${this.Sugg_Addr2}&Sugg_Addr3=${this.Sugg_Addr3}&Sugg_Addr4=${this.Sugg_Addr4}&Sugg_Email=${this.Sugg_Email}&Sugg_Name=${this.Sugg_Name}&Sugg_Sex=${this.Sugg_Sex}&Sugg_Telno=${this.Sugg_Telno}`;
        //console.log(`formData of submit click: ${formData}`);
        //return false;
        if (checkList.length === 0) {
            return true;
        }
        else {
            var attention = "";
            checkList.forEach(function (item) {
                attention = attention + item;
            });
            alert(attention);
            return false;
        }
        ; //return false 則不會使 onSubmit 觸發
    };
    // 右側 區選擇
    ReportDetailComponent.prototype.onDistrictChanged = function (s) {
        var _this = this;
        this.Sugg_Addr2 = s.value;
        this.Sugg_Addr2_name = this.getDropdownName(s);
        //高雄區
        if (s.value.indexOf('640') === 0) {
            this.regionCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["l" /* RegionCodesKaohsiung */])(s.value);
        }
        else if (s.value && s.value.length === 10 && s.value.indexOf('640') === -1) {
            this.subscribes.push(this.areaService.getRegions(s.value).subscribe(function (data) { return _this.regionCodes = data; }));
        }
        else {
            this.regionCodes = [];
        }
    };
    // 右側 里選擇
    ReportDetailComponent.prototype.onRegionChanged = function (s) {
        this.Sugg_Addr3 = s.value;
        this.Sugg_Addr3_name = this.getDropdownName(s);
    };
    // 右側 市鎮選擇
    ReportDetailComponent.prototype.onChangeCountyCode = function (s) {
        var _this = this;
        this.Sugg_Addr1_name = this.getDropdownName(s);
        this.Sugg_Addr1 = s.value;
        if (s.value === '6400000000') {
            this.districtCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__modules__["b" /* DistrictCodesKaohsiung */])();
        }
        else if (s.value.length === 10 && s.value !== '6400000000') {
            this.subscribes.push(this.areaService.getDistricts(s.value).subscribe(function (data) { return _this.districtCodes = data; }));
        }
        else {
            this.districtCodes = [];
        }
        this.regionCodes = [];
        this.Sugg_Addr3_name = this.region_placeholder;
        this.Sugg_Addr2_name = this.district_placeholder;
    };
    ReportDetailComponent.prototype.getDropdownName = function (e) {
        return e.options[e.selectedIndex].innerHTML;
    };
    // 左側 行政區 下拉選項
    ReportDetailComponent.prototype.onChangeAreaCodes = function (s) {
        this.Subj_District = s.value;
        this.Subj_District_name = this.getDropdownName(s);
    };
    ReportDetailComponent.prototype.onSubmit = function (value) {
        var _this = this;
        //console.log(value);
        //console.log(encodeURIComponent(this.recaptchaCode.HashCode),this.recaptchaCode.HashCode)
        var formData = "Case_Token=" + value.Case_Token + "&Atth_FileNames=" + value.Atth_FileNames + "&Subj_Content=" + value.Subj_Content + "&Subj_District=" + value.Subj_District + "&Subj_FileCount=" + value.Subj_FileCount + "&Subj_Item=" + value.Subj_Item + "&Subj_Security=" + value.Subj_Security + "&Subj_Subitem=" + value.Subj_Subitem + "&Sugg_Addr1=" + value.Sugg_Addr1 + "&Sugg_Addr2=" + value.Sugg_Addr2 + "&Sugg_Addr3=" + value.Sugg_Addr3 + "&Sugg_Addr4=" + value.Sugg_Addr4 + "&Sugg_Email=" + value.Sugg_Email + "&Sugg_Name=" + value.Sugg_Name + "&Sugg_Sex=" + value.Sugg_Sex + "&Sugg_Telno=" + value.Sugg_Telno + "&Input_ValidationCode=" + this.Input_ValidationCode + "&Hash_Code=" + encodeURIComponent(this.recaptchaCode.HashCode) + "&Time_Stamp=" + this.recaptchaCode.TimeStamp + "&Subj_Longitude=" + this.coords.latitude + "&Subj_Latitude=" + this.coords.latitude + "&Subj_Location=" + this.geoAddress;
        //console.log(`formData on submit: ${formData}`);
        this.subscribes.push(this.uploadService.postData(formData).subscribe(function (data) {
            if (data) {
                _this.getReportDone = !_this.getReportDone;
            }
            else {
                alert("\u8CC7\u6599\u4E0A\u50B3\u4E0D\u6210\u529F\u3002\u8ACB\u6AA2\u67E5\uFF01");
            }
        }, function (err) {
            console.log(err.status);
            if (err.status === 400) {
                _this.getValidation();
                _this.Input_ValidationCode = '';
            }
            else {
                console.log(err);
            }
        }));
    }; // onSubmit
    return ReportDetailComponent;
}()); // export class ReportDetailComponent
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_case__["b" /* CaseType */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_case__["b" /* CaseType */]) === "function" && _a || Object)
], ReportDetailComponent.prototype, "caseType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_case__["c" /* SubCaseType */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_case__["c" /* SubCaseType */]) === "function" && _b || Object)
], ReportDetailComponent.prototype, "subCaseType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], ReportDetailComponent.prototype, "closeReport", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("fileInput"),
    __metadata("design:type", Object)
], ReportDetailComponent.prototype, "fileInput", void 0);
ReportDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-report-detail',
        template: __webpack_require__("../../../../../src/app/report/report-detail.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_3__geoAddress_service__["a" /* GeoAddressService */], __WEBPACK_IMPORTED_MODULE_4__geoLocation_service__["a" /* GeolocationService */], __WEBPACK_IMPORTED_MODULE_5__upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_6__area_service__["a" /* AreaService */]],
        styles: [__webpack_require__("../../../../../src/app/report/report-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__geoLocation_service__["a" /* GeolocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__geoLocation_service__["a" /* GeolocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__geoAddress_service__["a" /* GeoAddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__geoAddress_service__["a" /* GeoAddressService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__upload_service__["a" /* UploadService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__area_service__["a" /* AreaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__area_service__["a" /* AreaService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */]) === "function" && _g || Object])
], ReportDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=report-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!selectedCaseType || !selectedSubCaseType\">\n  <div class=\"index-header\">\n    <div class=\"big-header big-header--back\"></div>\n    <div class=\"big-header-slash hidden-xs\"></div>\n    <div class=\"big-header container hidden-xs\">\n    </div>\n    <div class=\"header-content animated \">\n        <div class=\"header-content-bg\"></div>\n        <div class=\"header-content-info\">\n            <p class=\"text-center font-2xl\">歡迎進入<br>線上即時服務平台</p>\n            <p>平台提供陳情、檢舉、投訴與市<br>民生命財產安全相關事項請速撥</p>\n            <p class=\"text-center\">撥打&nbsp;&nbsp;<a class=\"font-2xl phone-call\" href=\"tel:1999\">1999</a>&nbsp;&nbsp;專線</p>\n            <a href=\"javascript:void(0);\" (click)=\"scrollTo('mayor')\" class=\"btn btn-orange page-scroll\"><i class=\"fa fa-envelope\"></i>&nbsp;&nbsp;寫信給市長</a>\n        </div>\n    </div>\n  </div>\n  <div class=\"body\">\n    <div class=\"container shadow-3d\">\n      <div class=\"out-conatainer row\">\n        <div class=\"article-header text-center\">\n          <h1 id=\"mayor\" class=\"article-title\">市長信箱</h1>\n        </div>\n      </div>\n      <div class=\"row pdLR1x body-content\" *ngIf=\"caseTypes.length > 0\">\n        <div class=\"col-md-4\">\n          <div class=\"case-type\" *ngFor=\"let type of caseTypes | slice:0:7\" (click)=\"type.active=!type.active\" [ngClass]=\"{active:type.active}\">\n            <p class=\"case-type-name\"><span class=\"case-type-num\">\n                        {{ type.Item }} <i class=\"fa Example of angle-double-right fa-angle-double-right\"></i></span> {{type.ItemName}}\n              <span class=\"case-open pull-right\"><i class=\"fa fa-plus\"></i></span>\n            </p>\n            <div class=\"clearfix\"></div>\n            <ul class=\"case-list\" *ngIf=\"type.Subitems\">\n              <li class=\"case-item\" *ngFor=\"let item of type.Subitems\"><a (click)=\"onSelected(type.Item,item.Subitem)\">{{item.SubitemName}}</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"case-type\" *ngFor=\"let type of caseTypes | slice:7:14\" (click)=\"type.active=!type.active\" [ngClass]=\"{active:type.active}\">\n            <p class=\"case-type-name\"><span class=\"case-type-num\">\n                        {{ type.Item }} <i class=\"fa Example of angle-double-right fa-angle-double-right\"></i></span> {{type.ItemName}}\n              <span class=\"case-open pull-right\"><i class=\"fa fa-plus\"></i></span>\n            </p>\n            <div class=\"clearfix\"></div>\n            <ul class=\"case-list\" *ngIf=\"type.Subitems\">\n              <li class=\"case-item\" *ngFor=\"let item of type.Subitems\"><a (click)=\"onSelected(type.Item,item.Subitem)\">{{item.SubitemName}}</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"case-type\" *ngFor=\"let type of caseTypes | slice:14:21\" (click)=\"type.active=!type.active\" [ngClass]=\"{active:type.active}\">\n            <p class=\"case-type-name\"><span class=\"case-type-num\">\n                        {{ type.Item }} <i class=\"fa Example of angle-double-right fa-angle-double-right\"></i></span> {{type.ItemName}}\n              <span class=\"case-open pull-right\"><i class=\"fa fa-plus\"></i></span>\n            </p>\n            <div class=\"clearfix\"></div>\n            <ul class=\"case-list\" *ngIf=\"type.Subitems\">\n              <li class=\"case-item\" *ngFor=\"let item of type.Subitems\"><a (click)=\"onSelected(type.Item,item.Subitem)\">{{item.SubitemName}}</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pop pop-inner\" style=\"display:block;\" *ngIf=\"caseTypes.length == 0\">\n        <div class=\"pop-content\">\n          <div class=\"mk-spinner-doublecircle\"></div>\n          <span class=\"loading-words\">Loading ...</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"selectedCaseType && selectedSubCaseType\">\n  <app-report-detail [caseType]=\"selectedCaseType\" [subCaseType]=\"selectedSubCaseType\" (closeReport)=\"closeReport()\"></app-report-detail>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_service__ = __webpack_require__("../../../../../src/app/report/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_global_service__ = __webpack_require__("../../../../../src/app/shared/global.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportComponent = (function () {
    function ReportComponent(titleService, reportService, globalService) {
        this.titleService = titleService;
        this.reportService = reportService;
        this.globalService = globalService;
    }
    ReportComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ReportComponent.prototype.getTypes = function () {
        var _this = this;
        this.reportService
            .getTypes()
            .subscribe(function (types) { return _this.caseTypes = types; });
    };
    ReportComponent.prototype.scrollTo = function (targetAnchor) {
        var offset = document.getElementById(targetAnchor).offsetTop + 500;
        window.scrollTo(0, offset);
    };
    ReportComponent.prototype.onSelected = function (id, subId) {
        var _this = this;
        this.reportService
            .getType(id)
            .subscribe(function (type) {
            _this.selectedCaseType = type;
            _this.selectedSubCaseType = type.Subitems.filter(function (item) { return item.Subitem == subId; })[0];
        });
    };
    ReportComponent.prototype.closeReport = function () {
        this.selectedCaseType = null;
        this.selectedSubCaseType = null;
    };
    ReportComponent.prototype.ngOnInit = function () {
        this.setTitle('市長信箱 - 高雄市政府線上即時服務平台');
        this.caseTypes = [];
        this.getTypes();
        this.globalService.showPhoneButton = true;
        window.scrollTo(0, 0);
    };
    ReportComponent.prototype.ngOnDestroy = function () {
        this.globalService.showPhoneButton = false;
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-report',
        template: __webpack_require__("../../../../../src/app/report/report.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */]],
        styles: ["\n    @media screen and (max-width: 480px){\n      #call.visible-report {\n          display : block !important;\n      }\n    }"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_global_service__["a" /* GlobalService */]) === "function" && _c || Object])
], ReportComponent);

var _a, _b, _c;
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/report/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rxjs_operators__ = __webpack_require__("../../../../../src/app/shared/rxjs-operators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.baseApiUrl = 'https://soweb.kcg.gov.tw/webapi/api/'; //;
        this.reportTypesUrl = this.baseApiUrl + 'items/';
        this.validationCodeUrl = this.baseApiUrl + 'ValidationCode/'; //'../../assets/vd.json';
    }
    ReportService.prototype.getTypes = function () {
        return this.http.get(this.reportTypesUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ReportService.prototype.getType = function (id) {
        return this.http.get(this.reportTypesUrl + id)
            .map(function (res) { return res.json()[0]; })
            .catch(this.handleError);
    };
    ReportService.prototype.getValidationCode = function () {
        return this.http.get(this.validationCodeUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ReportService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ReportService;
}());
ReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReportService);

var _a;
//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ "../../../../../src/app/report/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mattyyzac on 2016/10/13.
 */



var UploadService = (function () {
    function UploadService(_http) {
        this._http = _http;
    }
    UploadService.prototype.sendFileRequest = function (url, files) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    };
    UploadService.prototype.postData = function (formData) {
        //ref: https://scotch.io/tutorials/angular-2-http-requests-with-observables
        //ref: https://developer.mozilla.org/zh-TW/docs/HTTP/Access_control_CORS
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        // what the fuck!!!
        //let formData = `Case_Token=bxcvbxcvb-1&Subj_Content=111&Sugg_Email=1%401.1&Sugg_Name=abc&Sugg_Telno=978&Sugg_Sex=1&Sugg_Addr1=6400000000&Sugg_Addr2=6400300000&Sugg_Addr4=tr+tr&Subj_Item=01&Subj_Subitem=01&Subj_District=6400600000&Subj_Security=1&Subj_FileCount=0`;
        //formData = `Case_Token=thGwBgmBFngb&Atth_FileNames=&Subj_Content=rtdh&Subj_District=6400100000&Subj_FileCount=0&Subj_Item=01&Subj_Security=1&Subj_Subitem=02&Sugg_Addr1=6400000000&Sugg_Addr2=6400800000&Sugg_Addr3=6400800001&Sugg_Addr4=ghjngfhj&Sugg_Email=ryjh@dfgh.fgh&Sugg_Name=fyu&Sugg_Sex=2&Sugg_Telno=yumyukmruyu`;
        var url = "https://soweb.kcg.gov.tw/webapi/api/Case/";
        return this._http.post(url, formData, options) // ...using post request
            .map(function (resp) { return resp.json(); });
        /*{
        //this.uploadStatus = resp.status;
        // return this.retrieveData(resp);
        })*/
        // ...and calling .json() on the response to return data
        //.catch((error: any) => Observable.throw(error.json() || '目前系統暫停服務')); //...errors if
    };
    UploadService.prototype.retrieveData = function (data) {
        var message = data["_body"];
        //console.log(message);
        if (data.status == 200 && data.text().indexOf('登錄個案上傳成功') >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return UploadService;
}());
UploadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UploadService);

var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/case.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CaseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SubCaseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case; });
/* unused harmony export CaseContent */
/* unused harmony export CaseProcessStatus */
/* unused harmony export Attachment */
var CaseType = (function () {
    function CaseType() {
    }
    return CaseType;
}());

var SubCaseType = (function () {
    function SubCaseType() {
    }
    return SubCaseType;
}());

var Case = (function () {
    function Case() {
    }
    return Case;
}());

var CaseContent = (function () {
    function CaseContent() {
        this.subj_time = '2017/08/25';
    }
    return CaseContent;
}());

var CaseProcessStatus = (function () {
    function CaseProcessStatus() {
    }
    return CaseProcessStatus;
}());

var Attachment = (function () {
    function Attachment() {
    }
    return Attachment;
}());

//# sourceMappingURL=case.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalService = (function () {
    function GlobalService() {
        this.showPhoneButton = false;
        this.baseURL = "/";
    }
    return GlobalService;
}());
GlobalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], GlobalService);

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/rxjs-operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics

// Operators






//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ "../../../../../src/app/term/term.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (window:scroll)=\"onScroll($event.target)\">\n  <div class=\"banner row\">\n    <div class=\"banner-page-name\">\n      <h2 class=\"dk-green\">網站使用相關規範</h2>\n      <p class=\"dk-green\">Policy</p>\n    </div>\n    <img src=\"./assets/images/banner/banner_pic_policy.png\" alt=\"\">\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 page-block maT2x\">\n      <div [ngClass]=\"{'fixed-list': scrollHeight > 300 }\">\n        <p class=\"article-lable\">網站使用相關規範</p>\n        <ul class=\"news-all\" >\n          <li><a [ngClass]=\"{'active':getLableActive('privacy')}\" href=\"javascript:void(0);\" (click)=\"scrollTo('privacy')\">隱私權暨資訊安全保護政策</a></li>\n          <li><a [ngClass]=\"{'active':getLableActive('security')}\" href=\"javascript:void(0);\" (click)=\"scrollTo('security')\">網站安全政策</a></li>\n          <li><a [ngClass]=\"{'active':getLableActive('copyright')}\" href=\"javascript:void(0);\" (click)=\"scrollTo('copyright')\">著作權說明</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-9 page-block\">\n      <div id=\"privacy\" class=\"article-header text-center\">\n        <h4 class=\"article-title\">隱私權暨資訊安全保護政策</h4>\n      </div>\n      <div class=\"article-content block-separate\">\n        <p clas=\"navy maB2x\">\n          由於網際網路資料的傳輸不能保證百分之百的安全，本網站 努力保護網友的個人資料安全。由於資料傳輸過程牽涉您上網環境保全之良窳，並無法確信或保證網友傳送或接收本網站資料的安全，網友須注意並承擔網路資料傳 輸之風險。 <br>          網友基於個人意願在網站透露的各種個人資料，例如在熱門話題討論區公佈個人資料如電子郵件、姓名等，可能會被他人收集和使用，如果您擔心這些困擾，您可以 不用輸入這些資料。如果您在網路上公佈可被他人讀取的個人資料時，可能會收到其他團體主動提供的廣告或垃圾郵件。請您諒解此部份所造成的後果均非本網站所\n          能控制範圍，也無法負擔任何責任。\n          <br>\n          <br>\n        </p>\n        <p class=\"article-lable\">適用範圍</p>\n        <p class=\"navy maB2x\">\n          以下的隱私權保護政策，適用於您在高雄市政府市長信箱（線上即時服務系 統）網站以及其延伸服務網站（以 <a href=\"https://soweb.kcg.gov.tw/\">soweb.kcg.gov.tw</a> 網域為原則，以下均簡稱本網站）活動時，所涉及有關個人資料收集、運用與保護。但不適用\n          於經由本網站搜尋連結之其他網站，當您在這些網站進行活動時，關於個人資料的保護，則適用各該網站的隱私權保護政策。\n        </p>\n        <p class=\"article-lable\">個人資料收集方式</p>\n        <p class=\"navy maB2x\">\n          本網站依據「高雄市政府及所屬各機關處理人民陳情案件要點」透過以下幾 種管道收集網友個人資料： <br> 案件反應或查詢： <br> 當您點選本網站中建議(檢舉)類別時，依據「高雄市政府及所屬各機關處理人民陳情案件要點」會請您提供姓名、電話、電子信箱、性別及住址等個人資訊，限於\n          公務處理使用，若您選擇不提供或提供非正確資料，受理機關有權不予處理，若是您冒名檢舉要自行負擔法律責任，於案件結案時會有滿意度問卷調查，您可依個人 意願與否提供相關意見供研考會彙整參考改進。<br> 一般瀏覽：\n          <br> 本網站會保留網友在上網瀏覽或查詢時，伺服器自行產生的相關記錄(LOG)，包括連線設備IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等。本網 站會對個別連線者的瀏覽器予以標示，歸納使用者瀏覽器在本網站內部所瀏覽的網頁，除非您願意告知您的個人資料，否則本網站不會，也無法將此項記錄和您的個\n          人資料進行對應。 <br> 其他：\n          <br> 除了您主動於網站登錄提供個人資料外，您可能在本網站的討論區等單元，主動提供個人資料如電子郵件，姓名等。這種形式的資料提供，不在本網站隱私權保護政 策的範圍以內。此外，如果您寫信與本網站聯繫或是透過其他管道向我們反應意見，也會保存此項通訊及處理紀錄。<br>\n        </p>\n        <p class=\"article-lable\">個人 Cookies的運用與政策</p>\n        <p class=\"navy maB2x\">\n          為提供個人化的服務，會使用Cookies技術來儲存及在追蹤網友在某 時段的資料。Cookie是從網站傳送到瀏覽器，並保存在使用者電腦硬碟中的簡短資料。網友可以在Netscape的「功能設定」的「進階」或是IE的 「Internet選項」的「安全性」或Chrome「選項」的「進階」中選擇修改瀏覽器對Cookies的接受程度，包括接受所有Cookies、設定\n          Cookies時得到通知、拒絕所有Cookies等。如果您選擇拒絕所有的Cookies，可能無法使用部份個人化服務或是參與部份的活動。 <br> 一般而言，會依據以下目的及情況，在網友瀏覽器中寫入並讀取Cookies︰\n          <br> 為提供更好、更個人化的服務：\n          <br> 方便您參與個人化的互動活動。cookies 在您註冊或登入時建立，並在您登出時修改。 <br> 為統計瀏覽人數及分析瀏覽模式：\n          <br> 以了解網頁瀏覽的情況，做為改善服務的參考。 <br> 追蹤點選宣導廣告或參加行銷活動情形：\n          <br> 在發送電子報或網站主辦的行銷活動時，有時會寫入Cookies資料以追蹤整個活動過程中，網友的參與程度及相關數據。\n          <br>\n        </p>\n        <p class=\"article-lable\">個人資料的運用方式</p>\n        <p class=\"navy maB2x\">\n          本網站不會出售、出租或任意交換任何您的個人資料給其他團體或個人。 只有在以下狀況，本網站會在本政策原則之下，與第三者共用您的個人資料。 <br> 統計與分析：\n          <br> 本網站根據問卷調查、伺服器日誌文件，對使用者的人數、興趣和行為進行內部研究。此研究是根據全體網友的資料進行統計分析與整理，而所有的公開資訊或分析 報告，將僅對全體使用者行為總和進行分析及公佈，並不會提供特定對象個別資料之分析報告。<br>\n        </p>\n        <p class=\"article-lable\">資料的分享與公開方式</p>\n        <p class=\"navy maB2x\">\n          本網站不會任意出售、交換、或出租任何您的個人資料給其他團體或個人。 只有在以下狀況，本網站會在本政策原則之下，與第三者共用您的個人資料︰<br> 本網站有義務保護其網友隱私及個人資料，非經您本人同意不會自行修改、刪除或提供任何（或部份）網友個人資料及檔案。除非經過您事先同意或符合以下情況：\n          <br> （1）中華民國司法檢調單位透過合法程序進行調閱。\n          <br> （2）違反網站相關規章且已造成脅迫性。\n          <br> （3）基於主動衍伸政府網站服務效益之考量。\n          <br> （4）保護其他網友之合法使用權益。\n          <br>\n        </p>\n        <div id=\"security\" class=\"article-header text-center\">\n          <h4 class=\"article-title\">網站安全政策</h4>\n        </div>\n        <p class=\"article-lable\">隱私權暨資訊安全保護政策修訂</p>\n        <p class=\"navy maB2x\">\n          本網站會不定時修訂本項政策，以符合最新之隱私權保護規範。當在使用個 人資料的規定做較大幅度修改時，會在網頁上張貼告示，通知您相關事項。<br>\n        </p>\n        <p class=\"article-lable\">隱私權暨資訊安全保護政策諮詢</p>\n        <p class=\"navy maB2x\">\n          如果您對於本網站的隱私權保護政策或是有個人資料收集、運用、更新等問題， 歡迎來信至意見信箱：\n          <a href=\"mailto:kcgrdec@kcg.gov.tw\">kcgrdec@kcg.gov.tw</a>。\n        </p>\n        <div id=\"copyright\" class=\"article-header text-center\">\n          <h4 class=\"article-title\">著作權聲明條款</h4>\n        </div>\n        <p class=\"article-lable\">著作權聲明</p>\n        <p class=\"navy maB2x\">\n          由於網際網路資料的傳輸不能保證百分之百的安全，本網站 努力保護網友的個人資料安全。由於資料傳輸過程牽涉您上網環境保全之良窳，並無法確信或保證網友傳送或接收本網站資料的安全，網友須注意並承擔網路資料傳 輸之風險。 <br>          網友基於個人意願在網站透露的各種個人資料，例如在熱門話題討論區公佈個人資料如電子郵件、姓名等，可能會被他人收集和使用，如果您擔心這些困擾，您可以 不用輸入這些資料。如果您在網路上公佈可被他人讀取的個人資料時，可能會收到其他團體主動提供的廣告或垃圾郵件。請您諒解此部份所造成的後果均非本網站所\n          能控制範圍，也無法負擔任何責任。\n          <br> 一、 高雄市政府網站上所刊載之所有內容，除著作權法規定不得為著作權之標的（如法律、命令、公務員 撰擬之講稿、新聞稿等...請參考著作權法第９條規定）外，其他包括文字敘述、攝影、圖片、錄音、影像及其他資訊，均受著作權法保護。<br>          二、 上述不得為著作權標的者，任何人均得自由利用，歡迎各界廣為利用。<br> 三、 本網站資訊內容受著作權法保護者，除有合理使用情形外，應取得該著作財產權人同意或授權後，方得利用。<br> 四、 上述“合理使用情形”，說明如下：<br>\n          <br> * 本網站上所刊載以高雄市政府暨所屬機關學校名義公開發表之著作，即著作人為高雄市 政府暨所屬機關學校者，在合理範圍內，得重製、公開播送或公開傳輸，利用時，並請註明出處。<br> * 本網站之資訊，可為個人或家庭非營利之目的而重製。<br>          * 為報導、評論、教學、研究或其他正當目的，在合理範圍內，得引用本網站上之資訊，引用時，並請註明出處。<br> * 其他合理使用情形，請參考著作權法第四十四條至第六十五條之規定。<br>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/term/term.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermComponent = (function () {
    function TermComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
        this.whichLable = 'privacy';
    }
    TermComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    TermComponent.prototype.scrollTo = function (targetAnchor) {
        var offset = document.getElementById(targetAnchor).offsetTop + 300;
        window.scrollTo(0, offset);
    };
    TermComponent.prototype.onScroll = function (event) {
        this.scrollHeight = event.body.scrollTop;
    };
    TermComponent.prototype.getLableActive = function (lableName) {
        var offset1 = document.getElementById('privacy').offsetTop + 280, offset2 = document.getElementById('security').offsetTop + 280, offset3 = document.getElementById('copyright').offsetTop + 280;
        if (this.scrollHeight >= 0 && this.scrollHeight < offset2) {
            this.whichLable = 'privacy';
        }
        else if (this.scrollHeight >= offset2 && this.scrollHeight < offset3) {
            this.whichLable = 'security';
        }
        else if (this.scrollHeight >= offset3) {
            this.whichLable = 'copyright';
        }
        return lableName === this.whichLable;
    };
    TermComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitle('隱私權政策保護政策 - 高雄市政府線上即時服務平台');
        this.sub = this.route.params.subscribe(function (params) {
            if (params['lable'] !== undefined) {
                _this.scrollTo(params['lable']);
                window.scrollTo(0, 0);
            }
        });
    };
    return TermComponent;
}());
TermComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-term',
        template: __webpack_require__("../../../../../src/app/term/term.component.html"),
        styles: ["\n  @media screen and (min-width:768px){\n       .fixed-list {\n          position: fixed;\n          z-index: 3;\n          top: 20px;\n        }\n      }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], TermComponent);

var _a, _b;
//# sourceMappingURL=term.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    googleMapApiKey: 'AIzaSyC4jMQe13anvhR-iNWh3gMESeQK53hMYm0'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
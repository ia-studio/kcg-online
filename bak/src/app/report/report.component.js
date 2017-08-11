"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var case_service_1 = require('../case.service');
var ReportComponent = (function () {
    function ReportComponent(titleService, caseService, appComponent) {
        this.titleService = titleService;
        this.caseService = caseService;
        this.appComponent = appComponent;
    }
    ReportComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ReportComponent.prototype.getTypes = function () {
        var _this = this;
        this.caseService
            .getTypes()
            .then(function (types) { return _this.caseTypes = types; })
            .catch(function (error) { return _this.error = error; });
    };
    ReportComponent.prototype.ngOnInit = function () {
        this.setTitle('市長信箱 - 高雄市政府線上即時服務平台');
        this.getTypes();
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'app-report',
            templateUrl: 'app/report/report.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [case_service_1.CaseService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, case_service_1.CaseService, Object])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map
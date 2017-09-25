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
var case_service_1 = require('../case.service');
var ReportDetailComponent = (function () {
    function ReportDetailComponent(route, caseService) {
        this.route = route;
        this.caseService = caseService;
        this.navigated = false; // true if navigated here
    }
    ReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined && params['subId'] !== undefined) {
                _this.navigated = true;
                _this.getType(params['id'], params['subId']);
            }
        });
    };
    ReportDetailComponent.prototype.getType = function (id, subId) {
        var _this = this;
        this.caseService
            .getType(id)
            .then(function (type) { return _this.caseType = type; })
            .then(function (subType) { return _this.subCaseType = subType.subItems.find(function (item) { return item.id === subId; }); })
            .catch(function (error) { return _this.error = error; });
    };
    ReportDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ReportDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-report-detail',
            templateUrl: 'app/report/report-detail.component.html',
            providers: [case_service_1.CaseService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, case_service_1.CaseService])
    ], ReportDetailComponent);
    return ReportDetailComponent;
}());
exports.ReportDetailComponent = ReportDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=report-detail.component.js.map
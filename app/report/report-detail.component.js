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
var ReportDetailComponent = (function () {
    function ReportDetailComponent(route) {
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    ReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                _this.title = params['id'];
                _this.navigated = true;
            }
        });
    };
    ReportDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ReportDetailComponent.prototype, "close", void 0);
    ReportDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-report-detail',
            templateUrl: 'app/report/report-detail.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
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
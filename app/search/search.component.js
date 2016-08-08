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
var platform_browser_1 = require('@angular/platform-browser');
var case_service_1 = require('../case.service');
var SearchComponent = (function () {
    function SearchComponent(titleService, caseService) {
        this.titleService = titleService;
        this.caseService = caseService;
    }
    SearchComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    SearchComponent.prototype.getCases = function () {
        var _this = this;
        this.caseService
            .getCases()
            .then(function (mycase) { return _this.searchCase = mycase; })
            .catch(function (error) { return _this.error = error; });
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.setTitle('案件查詢 - 高雄市政府線上即時服務平台');
        this.getCases();
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            templateUrl: 'app/search/search.component.html',
            providers: [case_service_1.CaseService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, case_service_1.CaseService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map
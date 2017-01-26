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
var core_1 = require("@angular/core");
var DataService_1 = require("./DataService");
var SportsStoreCategories = (function () {
    function SportsStoreCategories(_dataService) {
        this._dataService = _dataService;
        this.selectedCategory = null;
        this.productListActiveClass = "btn-primary";
        this.categories = [];
    }
    SportsStoreCategories.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
        //console.log(this.products);
    };
    SportsStoreCategories.prototype.getCategoryClass = function (category) {
        return this.selectedCategory == category ? this.productListActiveClass : '';
    };
    SportsStoreCategories.prototype.selectCategory = function (category) {
        this.selectedCategory = category;
    };
    return SportsStoreCategories;
}());
SportsStoreCategories = __decorate([
    core_1.Component({
        selector: 'ss-categories',
        templateUrl: 'app/views/category-list-component.html'
    }),
    __metadata("design:paramtypes", [DataService_1.DataService])
], SportsStoreCategories);
exports.SportsStoreCategories = SportsStoreCategories;
//# sourceMappingURL=SportsStoreCategories.js.map
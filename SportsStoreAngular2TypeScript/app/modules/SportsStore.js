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
var router_1 = require("@angular/router");
var Cart_1 = require("./Cart");
var SportsStore = (function () {
    function SportsStore(_dataService, _cart, _route) {
        this._dataService = _dataService;
        this._cart = _cart;
        this._route = _route;
        this.products = [];
    }
    SportsStore.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getProducts().subscribe(function (data) {
            _this.products = data;
        });
    };
    SportsStore.prototype.addProductToCart = function (product) {
        this._cart.addProduct(product.Id, product.Name, product.Price);
    };
    return SportsStore;
}());
SportsStore = __decorate([
    core_1.Component({
        selector: 'ss-products',
        templateUrl: 'app/views/product-list-component.html'
    }),
    __metadata("design:paramtypes", [DataService_1.DataService, Cart_1.Cart, router_1.ActivatedRoute])
], SportsStore);
exports.SportsStore = SportsStore;
//# sourceMappingURL=SportsStore.js.map
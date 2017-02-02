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
var http_1 = require("@angular/http");
//import * as $ from 'jquery';
var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this._productsurl = 'http://localhost:53377/api/products';
        this._categoriesurl = 'http://localhost:53377/api/products/categories';
        this._ordersUrl = 'http://localhost:53377/api/orders';
    }
    DataService.prototype.getProducts = function () {
        return this._http.get(this._productsurl)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getCategories = function () {
        return this._http.get(this._categoriesurl)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.sendOrder = function (order) {
        return this._http.post(this._ordersUrl, order)
            .map(function (response) { return response.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=DataService.js.map
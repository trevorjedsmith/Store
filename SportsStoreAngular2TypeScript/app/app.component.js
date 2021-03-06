"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("./rxjs-ops");
var DataService_1 = require("./modules/DataService");
var Cart_1 = require("./modules/Cart");
var Logger_1 = require("./modules/Logger");
var ProductRepository_1 = require("./modules/ProductRepository");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "The Store";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "<div class=\"navbar navbar-default\">\n                <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n                <span class=\"glyphicon glyphicon-qrcode\" aria-hidden=\"true\"></span>\n                {{pageTitle}}\n                </a>\n                <ss-cartsummary></ss-cartsummary>\n                </div>\n                <div class=\"panel panel-default row\">\n                <router-outlet></router-outlet>\n                </div>",
        providers: [DataService_1.DataService, Cart_1.Cart, ProductRepository_1.ProductRepository, Logger_1.Logger]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
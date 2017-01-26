"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); //Ng If , Ng For
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var SportsStore_1 = require("./modules/SportsStore");
var SportsStoreCategories_1 = require("./modules/SportsStoreCategories");
var CartSummary_1 = require("./modules/CartSummary");
// hack - make sure that jQuery plugins can find
//        jquery reference
//Angular module by @NgModule
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, SportsStore_1.SportsStore, SportsStoreCategories_1.SportsStoreCategories, CartSummary_1.CartSummary],
        bootstrap: [app_component_1.AppComponent] //root component
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
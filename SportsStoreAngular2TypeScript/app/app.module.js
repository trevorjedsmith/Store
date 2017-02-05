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
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var SportsStore_1 = require("./modules/SportsStore");
var Checkout_1 = require("./modules/Checkout");
var CartSummary_1 = require("./modules/CartSummary");
var PlaceOrder_1 = require("./modules/PlaceOrder");
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
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                {
                    path: 'sportsstore',
                    component: SportsStore_1.SportsStore //the component that the router should create 
                },
                {
                    path: 'checkout',
                    component: Checkout_1.Checkout
                },
                {
                    path: 'placeorder',
                    component: PlaceOrder_1.PlaceOrder //PlaceOrder
                },
                {
                    path: '',
                    redirectTo: 'sportsstore',
                    pathMatch: 'full'
                }
            ])],
        declarations: [app_component_1.AppComponent, SportsStore_1.SportsStore, CartSummary_1.CartSummary, Checkout_1.Checkout, PlaceOrder_1.PlaceOrder],
        bootstrap: [app_component_1.AppComponent] //root component
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
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
var Cart_1 = require("./Cart");
var router_1 = require("@angular/router");
var PlaceOrder = (function () {
    function PlaceOrder(_cart, _dataService, router) {
        this._cart = _cart;
        this._dataService = _dataService;
        this.router = router;
        this.lines = [];
    }
    PlaceOrder.prototype.getFormData = function () {
        alert(this.name);
    };
    PlaceOrder.prototype.onSubmit = function () {
        var _this = this;
        var lines = this._cart.getProducts();
        //create shipping details object
        var order = {
            name: this.name,
            street: this.street,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country,
            giftwrap: this.giftwrap,
            lines: lines
        };
        //posting order and subscibing to it's return for future toasts
        this._dataService.sendOrder(order).subscribe(function (data) {
            console.log(data);
            //if success clear cart
            _this._cart.clearCart();
            _this.router.navigate(['sportsstore']);
        });
    };
    return PlaceOrder;
}());
PlaceOrder = __decorate([
    core_1.Component({
        templateUrl: 'app/views/placeorder.html'
    }),
    __metadata("design:paramtypes", [Cart_1.Cart, DataService_1.DataService, router_1.Router])
], PlaceOrder);
exports.PlaceOrder = PlaceOrder;
//# sourceMappingURL=PlaceOrder.js.map
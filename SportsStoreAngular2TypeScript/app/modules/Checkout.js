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
var Cart_1 = require("./Cart");
var Checkout = (function () {
    function Checkout(_cart) {
        this._cart = _cart;
        this.cartData = [];
    }
    Checkout.prototype.ngOnInit = function () {
        this.cartData = this._cart.getProducts();
        //console.log(this.products);debugging only
    };
    Checkout.prototype.total = function () {
        var total = 0;
        for (var i = 0; i < this.cartData.length; i++) {
            total += (this.cartData[i].Price * this.cartData[i].Count);
        }
        return total;
    };
    Checkout.prototype.remove = function (id) {
        this._cart.removeProduct(id);
    };
    return Checkout;
}());
Checkout = __decorate([
    core_1.Component({
        selector: 'ss-cart',
        templateUrl: 'app/views/cart-component.html'
    }),
    __metadata("design:paramtypes", [Cart_1.Cart])
], Checkout);
exports.Checkout = Checkout;
//# sourceMappingURL=Checkout.js.map
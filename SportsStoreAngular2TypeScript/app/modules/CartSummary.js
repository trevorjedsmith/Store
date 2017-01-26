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
var CartSummary = (function () {
    function CartSummary(cart) {
        this.cart = cart;
    }
    CartSummary.prototype.itemCount = function () {
        var cartData = this.cart.getProducts();
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
            total += cartData[i].Count;
        }
        return total;
    };
    CartSummary.prototype.total = function () {
        var cartData = this.cart.getProducts();
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
            total += (cartData[i].Price * cartData[i].Count);
        }
        return total;
    };
    return CartSummary;
}());
CartSummary = __decorate([
    core_1.Component({
        selector: 'ss-cartsummary',
        templateUrl: 'app/views/cartsummary.html'
    }),
    __metadata("design:paramtypes", [Cart_1.Cart])
], CartSummary);
exports.CartSummary = CartSummary;
//# sourceMappingURL=CartSummary.js.map
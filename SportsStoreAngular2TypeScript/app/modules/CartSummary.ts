import { Component, OnInit } from '@angular/core';
import { Cart } from './Cart';

@Component({
    selector: 'ss-cartsummary',
    templateUrl: 'app/views/cartsummary.html'
})
export class CartSummary  {

    constructor(private cart:Cart) {
       
    }

    itemCount() {
        let cartData = this.cart.getProducts();
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
            total += cartData[i].Count;
        }
        return total;
    }

    total() {
        let cartData = this.cart.getProducts();
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
            total += (cartData[i].Price * cartData[i].Count);
        }
        return total;
    }
    
}
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//Ng If , Ng For
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Cart } from './Cart';


@Component({
    selector: 'ss-cart',
    templateUrl: 'app/views/cart-component.html'
})
export class Checkout implements OnInit {

    cartData: any[] = [];

    constructor(private _cart: Cart) {

    }

    ngOnInit() {
        this.cartData = this._cart.getProducts();
        //console.log(this.products);debugging only
    }

    total() {
        let total = 0;
        for (var i = 0; i < this.cartData.length; i++) {
            total += (this.cartData[i].Price * this.cartData[i].Count);
        }
        return total;
    }

    remove(id: number) {
        this._cart.removeProduct(id);
    }
}
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';//Ng If , Ng For

import { DataService } from './DataService';
import { Cart } from './Cart';

import { Router } from '@angular/router'



@Component({
    templateUrl: 'app/views/placeorder.html'
})
export class PlaceOrder {

    public name: string;
    public street: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public giftwrap: boolean;
    public lines : any[] = [];

    public email: string;

    constructor(private _cart: Cart, private _dataService: DataService, private router: Router) {

    }

    getFormData():void {
        alert(this.name);
    }

    onSubmit() {
        let lines = this._cart.getProducts();

        //create shipping details object
        let order = {
            name: this.name,
            street: this.street,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country,
            giftwrap: this.giftwrap,
            lines:lines
        }
        //posting order and subscibing to it's return for future toasts
        this._dataService.sendOrder(order).subscribe((data) => {
            console.log(data);
            //if success clear cart
            this._cart.clearCart();
            this.router.navigate(['sportsstore']);
        });      
    }
}
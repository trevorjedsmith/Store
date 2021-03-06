﻿import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';//Ng If , Ng For

import { DataService } from './DataService';
import { Cart } from './Cart';

import { Router } from '@angular/router'

import { Logger } from './Logger';



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
    public lines: any[] = [];

    public email: string;

    constructor(private _cart: Cart, private _dataService: DataService, private router: Router,private _logger:Logger) {

    }

    getFormData():void {
        alert(this.name);
    }

    onSubmit() {
        this._logger.log('Creating your order please be patient..', null, true);
        var self = this;
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
        this._logger.log('Sending email to customer and merchant', null, true);
        //posting order and subscibing to it's return for future toasts
        this._dataService.sendOrder(order).subscribe(
            data => {
                //if success clear cart
                this._cart.clearCart();
                this.router.navigate(['sportsstore']);
            }, error=> {
                //error
                self._logger.logError(error, null, true);
            });      
    }
}
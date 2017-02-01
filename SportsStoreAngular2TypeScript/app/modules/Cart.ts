import { Component, OnInit, Injectable } from '@angular/core';

import { CartSummary } from './CartSummary';
//import { Injectable } from '@angular/core';

@Injectable()
export class Cart {

    cartData: any[] = [];


    constructor() {

    }

    addProduct(id: number, name: string, price: number) {
        let addedToExistingItem = false;

        for (var i = 0; i < this.cartData.length; i++) {
            if (this.cartData[i].Id == id) {
                this.cartData[i].Count++;
                addedToExistingItem = true;
                break;
            }
        }
        if (!addedToExistingItem) {
            this.cartData.push({
                Count:1,Id:id,Price:price,Name:name
            });

        }
    }

    removeProduct(id: number) {
        for (var i = 0; i < this.cartData.length; i++) {
            if (this.cartData[i].Id == id) {
                this.cartData.splice(i, 1);
                break;
            }
        }
    }


    getProducts() {
        return this.cartData;
    }

    

}
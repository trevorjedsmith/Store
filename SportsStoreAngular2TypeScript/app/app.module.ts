import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//Ng If , Ng For
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { SportsStore } from './modules/SportsStore';
import { Checkout } from './modules/Checkout';
import { CartSummary } from './modules/CartSummary';
import { PlaceOrder } from './modules/PlaceOrder';

// hack - make sure that jQuery plugins can find
//        jquery reference

//Angular module by @NgModule
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
        {
            path: 'sportsstore', //the router matches this route's path to the URL in the browser address bar
            component: SportsStore //the component that the router should create 
        },
        {
            path: 'checkout',
            component: Checkout
        },
        {
            path: 'placeorder',
            component: PlaceOrder//PlaceOrder
        },
        {
            path: '',
            redirectTo: 'sportsstore',
            pathMatch: 'full'
        }
    
   
    ])],//external modules
    declarations: [AppComponent, SportsStore, CartSummary, Checkout, PlaceOrder],//internal modules
    bootstrap: [AppComponent]//root component
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//Ng If , Ng For
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { SportsStore } from './modules/SportsStore';
import { Checkout } from './modules/Checkout';
import { SportsStoreCategories } from './modules/SportsStoreCategories';
import { CartSummary } from './modules/CartSummary';

import { TestNgFeatureModule } from './modules/TestNgFeatureModule';


// hack - make sure that jQuery plugins can find
//        jquery reference

//Angular module by @NgModule
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, TestNgFeatureModule, RouterModule.forRoot([
        {
            path: 'sportsstore/:id',
            component: SportsStore
        },
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
            component: Checkout//PlaceOrder
        },
        {
            path: '',
            redirectTo: '/sportsstore',
            pathMatch: 'full'
        }
    
   
    ])],//external modules
    declarations: [AppComponent, SportsStore, SportsStoreCategories, CartSummary, Checkout],//internal modules
    bootstrap: [AppComponent]//root component
})
export class AppModule { }
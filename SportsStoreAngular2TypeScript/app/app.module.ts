import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//Ng If , Ng For
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { SportsStore } from './modules/SportsStore';
import { SportsStoreCategories } from './modules/SportsStoreCategories';
import { CartSummary } from './modules/CartSummary';

// hack - make sure that jQuery plugins can find
//        jquery reference

//Angular module by @NgModule
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],//external modules
    declarations: [AppComponent, SportsStore, SportsStoreCategories , CartSummary],//internal modules
    bootstrap: [AppComponent]//root component
})
export class AppModule { }
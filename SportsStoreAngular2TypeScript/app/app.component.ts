import { Component } from '@angular/core';
import './rxjs-ops';
import { DataService } from './modules/DataService';
import { Cart } from './modules/Cart';

import { Logger } from './modules/Logger';

import { ProductRepository } from './modules/ProductRepository';

@Component({
    selector: 'pm-app',
    template: `<div class="navbar navbar-default">
                <a class="navbar-brand" [routerLink]="['/']">
                <span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span>
                {{pageTitle}}
                </a>
                <ss-cartsummary></ss-cartsummary>
                </div>
                <div class="panel panel-default row">
                <router-outlet></router-outlet>
                </div>`,
    providers: [DataService, Cart, ProductRepository, Logger]

   
})
export class AppComponent {
    pageTitle: String = "The Store";


}
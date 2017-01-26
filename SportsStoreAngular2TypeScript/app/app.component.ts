import { Component } from '@angular/core';
import './rxjs-ops';
import { DataService } from './modules/DataService';
import { Cart } from './modules/Cart';

@Component({
    selector: 'pm-app',
    template: `<div class="navbar navbar-default">
                <a class="navbar-brand" href="#">
                <span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span>
                {{pageTitle}}
                </a>
                <ss-cartsummary></ss-cartsummary>
                </div>
                <div class="panel panel-default row">
                <div class="col-xs-3">
                <ss-categories></ss-categories>
                </div>
                <div class="col-xs-8">
                <ss-products></ss-products>
                </div>
                </div>`,
    providers:[DataService, Cart]

   
})
export class AppComponent {
    pageTitle: String = "The Store";


}
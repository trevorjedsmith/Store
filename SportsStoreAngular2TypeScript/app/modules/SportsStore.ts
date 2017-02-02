import { Component , OnInit } from '@angular/core';

import { IProduct } from './IProduct';
import { DataService } from './DataService';

import { ActivatedRoute } from '@angular/router';

import { Cart } from './Cart';

import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'ss-products',
    templateUrl: 'app/views/product-list-component.html'
})
export class SportsStore implements OnInit {

    products: any[] = [];
    errorMessage: string;


    constructor(private _dataService: DataService, private _cart: Cart, private _route: ActivatedRoute) {

        this._dataService.getProducts().subscribe(
            data => this.products = data,
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        
    }

  


    addProductToCart(product: any) {
        this._cart.addProduct(product.Id, product.Name, product.Price);
    }


  
}
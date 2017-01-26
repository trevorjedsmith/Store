import { Component , OnInit } from '@angular/core';

import { IProduct } from './IProduct';
import { DataService } from './DataService';

import { Cart } from './Cart';

import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'ss-products',
    templateUrl: 'app/views/product-list-component.html'
})
export class SportsStore implements OnInit {

    products: any[] = [];

    constructor(private _dataService: DataService, private _cart: Cart) {

    }

    ngOnInit() {
        this._dataService.getProducts().subscribe((data) => {
            this.products = data;
        });
        //console.log(this.products);
    }

    addProductToCart(product: any) {
        this._cart.addProduct(product.Id, product.Name, product.Price);
    }

  
}
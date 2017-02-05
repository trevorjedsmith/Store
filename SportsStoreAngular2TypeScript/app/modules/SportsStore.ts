import { Component } from '@angular/core';

import { IProduct } from './IProduct';
import { ProductRepository } from './ProductRepository';

import { Cart } from './Cart';

import { Logger } from './Logger';

import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'ss-products',
    templateUrl: 'app/views/product-list-component.html'
})
export class SportsStore {

    errorMessage: string;
    public selectedCategory: string = null;

    constructor(private _dataService: ProductRepository, private _cart: Cart, private _logger: Logger) {
        this._logger.log('Loading The Store ECommerce Application', null, true);
        this._logger.log('Received product data from server...', null, true);
        this._logger.log('Received product categories from server...', null, true);
    }

    get products(): IProduct[] {
        return this._dataService.getProducts(this.selectedCategory);
       
    }

    get categories(): string[] {
        return this._dataService.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    addProductToCart(product: any) {
        this._cart.addProduct(product.Id, product.Name, product.Price);
    }
  
}
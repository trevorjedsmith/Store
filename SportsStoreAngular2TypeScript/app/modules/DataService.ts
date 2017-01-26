import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { IProduct } from './IProduct';

import * as $ from 'jquery';

@Injectable()
export class DataService {

    private _productsurl: string = 'http://localhost:53377/api/products';
    private _categoriesurl: string = 'http://localhost:53377/api/products/categories';

    constructor(private _http: Http) {

    }

    getProducts() {
        return this._http.get(this._productsurl)
                   .map((response: Response) => response.json());
    }

    getCategories() {

        return this._http.get(this._categoriesurl)
            .map((response: Response) => response.json());
    }
}

    


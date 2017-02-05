import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { IProduct } from './IProduct';
import { ICategory } from './ICategory';

import { Observable } from "rxjs/Observable";

//import * as $ from 'jquery';

const PROTOCOL = 'http';
const PORT = '53377';

@Injectable()
export class DataService {

    baseUrl: string;

    private _productsurl: string = 'http://localhost:53377/api/products';
    private _categoriesurl: string = 'http://localhost:53377/api/products/categories';
    private _ordersUrl: string = 'http://localhost:53377/api/orders';

    constructor(private _http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productsurl)
                   .map((response: Response) => response.json());
    }


    getCategories(): Observable<string[]> {

        return this._http.get(this._categoriesurl)
            .map((response: Response) => response.json());
    }

    sendOrder(order: any): Observable<any> {

        return this._http.post(this._ordersUrl, order)
            .map((response: Response) => response.json());
    }
}

    


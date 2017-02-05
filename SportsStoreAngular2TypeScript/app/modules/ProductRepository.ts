import { Injectable } from "@angular/core";
import { IProduct } from "./IProduct";
import { ICategory } from './ICategory';

import { DataService } from './DataService';

@Injectable()
export class ProductRepository {
    private products: IProduct[] = [];
    private categories: string[] = [];

    constructor(private dataService: DataService) {
        dataService.getProducts().subscribe(pdata => {
            this.products = pdata;
            dataService.getCategories().subscribe(cdata => {
                this.categories = cdata;
            })
        })
    }

    getProducts(category: string = null) {
        return this.products.filter(p => category == null || category == p.Category);
    }


    getProduct(id: number): IProduct {
        return this.products.find(p => p.Id == id);
    }

    getCategories(): string[] {
        console.info(this.categories);
        return this.categories;
    }
}
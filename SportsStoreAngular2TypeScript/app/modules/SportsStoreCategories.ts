import { Component } from '@angular/core';
import { ICategory } from './ICategory';

import { DataService } from './DataService';

@Component({
    selector: 'ss-categories',
    templateUrl: 'app/views/category-list-component.html'
})
export class SportsStoreCategories {

    selectedCategory: string = null;

    productListActiveClass: string = "btn-primary";

    categories: string[] = [];

    constructor(private _dataService: DataService) {

    }

    ngOnInit() {
        this._dataService.getCategories().subscribe((data) => {
            this.categories = data;
        });
        //console.log(this.products);
    }

    getCategoryClass(category: string): string {
        return this.selectedCategory == category ? this.productListActiveClass : '';
    }

    selectCategory(category: string): void {
        this.selectedCategory = category;
    }
}


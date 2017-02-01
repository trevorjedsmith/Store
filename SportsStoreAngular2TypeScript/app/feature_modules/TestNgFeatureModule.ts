import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule],
    declarations: [] //any components for this feature
})
export class TestNgFeatureModule {
    constructor() {
        console.log('TestNgModuleBootstrapped.');
    }
}
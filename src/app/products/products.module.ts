import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { GlobalModule } from "../global/global.module";
import { ProductComponent } from './components/product/product/product.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductDetailsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        GlobalModule,
        RouterModule
    ]
})
export class ProductsModule { }

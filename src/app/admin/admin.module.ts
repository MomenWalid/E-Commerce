import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCartComponent } from './components/admin-cart/admin-cart.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { GlobalModule } from '../global/global.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminCartComponent,
    AdminProductsComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

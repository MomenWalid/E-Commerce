import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { GlobalModule } from '../global/global.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    GlobalModule
  ]
})
export class CartsModule { }

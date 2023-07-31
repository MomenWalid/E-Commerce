import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCartComponent } from './admin/components/admin-cart/admin-cart.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

const routes: Routes = [
  {path:"admin" , component:AdminCartComponent},
  {path:"adminProducts" , component:AdminProductsComponent},
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductDetailsComponent},
  {path:"carts" ,component:CartComponent },
  {path:"**" ,redirectTo:"products" , pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

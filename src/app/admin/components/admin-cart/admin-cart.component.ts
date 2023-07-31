import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartsService } from 'src/app/carts/services/carts.service';
import { ProductsService } from 'src/app/products/services/products.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css'],
})
export class AdminCartComponent implements OnInit {
  carts: any[] = [];

  products: any = [];

  total!: number;

  detailes!: any;

  form!: FormGroup;

  constructor(
    private service: AdminService,
    private build: FormBuilder,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: [''],
    });
    this.getCart();
    this.apply();
  }

  getCart() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res;
    });
  }

  apply() {
    let data = this.form.value;
    this.service.getAllCarts(data).subscribe((res: any) => {
      this.carts = res;
    });
  }

  delete(id: number) {
    this.service.deleteCart(id).subscribe((res: any) => {
      this.getCart();
      alert('you delete your cart');
    });
  }

  view(index: number) {
    this.products = [];
    this.total = 0;

    this.detailes = this.carts[index];
    for (let i = 0; i < this.detailes.products.length; i++) {
      this.productService
        .productId(this.detailes.products[i].productId)
        .subscribe((res) => {
          this.products.push({
            item: res,
            quantity: this.detailes.products[i].quantity,
          });
          this.total += this.products[i].item.price * this.products[i].quantity;
        });
    }
  }
}

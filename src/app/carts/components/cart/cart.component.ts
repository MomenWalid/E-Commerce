import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProduct: any[] = [];

  total: any = 0;

  success: boolean = false;

  clear: boolean = false;

  constructor(private service: CartsService) {}

  ngOnInit(): void {
    this.getCartProduct();
    this.totalPrice();
  }

  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  clearCart() {
    this.cartProduct = [];
    this.totalPrice();
    localStorage.clear();
    this.clear = true;
  }

  increaseQuantity(product: any) {
    product.quantity++;
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
  }

  changeQuantity() {
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
  }

  decreaseQuantity(product: any) {
    product.quantity--;
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
  }

  deleteProduct(product: any) {
    this.cartProduct.splice(this.cartProduct.indexOf(product), 1);
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
  }

  totalPrice() {
    this.total = 0;
    for (let i = 0; i < this.cartProduct.length; i++) {
      this.total +=
        this.cartProduct[i].data.price * this.cartProduct[i].quantity;
    }
  }

  addCart() {
    let products = this.cartProduct.map((product) => {
      return { productId: product.data.id, quantity: product.quantity };
    });

    let Model = {
      userId: 320200103,
      date: new Date(),
      products: products,
    };

    this.service.createCart(Model).subscribe((res: any) => {
      this.success = true;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];

  categories: any[] = [];

  loader: boolean = false;

  cartProduct: any = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loader = true;
    this.service.getAllProducts().subscribe(
      (product: any) => {
        this.products = product;
        this.loader = false;
      },
      (err: any) => {
        this.loader = false;
        alert(err.name);
      }
    );
  }
  getCategories() {
    this.loader = true;
    this.service.getAllCategories().subscribe(
      (category: any) => {
        this.categories = category;
        this.loader = false;
      },
      (err: any) => {
        this.loader = false;
        alert(err.name);
      }
    );
  }

  selectCategory(event: any) {
    let value = event.target.value;

    if (value == 'all') {
      this.getProducts();
    } else {
      this.loader = true;
      this.service.filterCategories(value).subscribe((category: any) => {
        this.products = category;
        this.loader = false;
      });
    }
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProduct.find(
        (item: any) => item.data.id == event.data.id
      );
      if (exist) {
        alert('Product is already in Your Cart');
      } else {
        this.cartProduct.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProduct));
      }
    } else {
      this.cartProduct.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: any = [];

  categories: any = [];

  form!: FormGroup;

  image!: any;

  selectedCategory: string = '';

  productId!: number;

  constructor(
    private productService: ProductsService,
    private service: AdminService,
    private build: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
    this.allProduct();
    this.allCategories();
  }

  allProduct() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  allCategories() {
    this.productService.getAllCategories().subscribe((category) => {
      this.categories = category;
    });
  }

  selectCategory(event: any) {
    this.form.get('category')?.setValue(event.target.value);
  }

  selectedImage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.image = reader.result;
      this.form.get('image')?.setValue(this.image);
    };
  }

  addProduct() {
    let model = this.form.value;
    this.service.addProduct(model).subscribe((res) => {
      alert('add product successfuly');
    });
  }

  updateProduct(product: any) {
    this.form.patchValue({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    });
    this.selectedCategory = product.category;
    this.image = product.image;

    this.productId = product.id;
  }

  update() {
    let model = this.form.value;

    this.service.updateProduct(this.productId, model).subscribe((res) => {
      alert('update product successfuly');
    });
  }
}

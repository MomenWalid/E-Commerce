import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(environment.baseURL + 'products');
  }

  getAllCategories() {
    return this.http.get(environment.baseURL + 'products/categories');
  }

  filterCategories(word: string) {
    return this.http.get(environment.baseURL + 'products/category/' + word);
  }

  productId(id: number) {
    return this.http.get(environment.baseURL + 'products/' + id);
  }
}

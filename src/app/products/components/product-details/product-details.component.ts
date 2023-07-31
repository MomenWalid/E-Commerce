import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;

  data: any = {};

  loader: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productDetails();
  }

  productDetails() {
    this.service.productId(this.id).subscribe(
      (product) => {
        this.loader = true;
        this.data = product;
      },
      (err) => {
        this.loader = false;
      }
    );
  }
}

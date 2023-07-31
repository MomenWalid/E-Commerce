import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  addBtn: boolean = true;

  amount: number = 1;

  @Input() item: any = {};

  @Output() product = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.product.emit({ data: this.item, quantity: this.amount });
    this.addBtn = true;
  }
}

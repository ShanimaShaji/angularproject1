import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() productData: any;
}

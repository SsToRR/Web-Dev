import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
    product: Product[] = [
      {
        id: 1,
        name: 'Sample Product',
        price: 29.99,
        inStock: true,
        likes: 0
      },
      {
        id: 2,
        name: 'Another Product',
        price: 49.99,
        inStock: false,
        likes: 0
      },
      {
        id: 3,
        name: 'Third Product',
        price: 19.99,
        inStock: true,
        likes: 0
      },
      {
        id: 4,
        name: 'Fourth Product',
        price: 99.99,
        inStock: true,
        likes: 0
      },
      {
        id: 5,
        name: 'Fifth Product',
        price: 9.99,
        inStock: false,
        likes: 0
      }
    ];
}

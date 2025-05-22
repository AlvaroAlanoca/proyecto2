import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../services/product.service';

@Component({
  selector: 'app-product-card-component',
  standalone: false,
  templateUrl: './product-card-component.component.html',
  styleUrl: './product-card-component.component.css'
})
export class ProductCardComponentComponent {
  @Input() id!:number;
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
    @Input() product!: Product;


  
  constructor(private cartService: CartService, private router: Router) {}
  
  onAddToCart() {
    this.cartService.addToCart(this.title); 
}
  goToDetail() {
    this.router.navigate(['/products', this.id]);
  }
}
import { Component } from '@angular/core';
import { ProductService,Product } from './services/product.service';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',

})
export class AppComponent {

  constructor(public cartService: CartService) {}


  getCartCount(): number {
    return this.cartService.getCartCount();
  }
  getCartItems(): string[] {
    return this.cartService.getCart();
  }
}

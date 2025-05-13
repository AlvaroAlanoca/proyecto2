import { Component } from '@angular/core';
import { ProductService,Product } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
   products: Product[] = [];
   cart: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit():void {
    this.products = this.productService.getProducts(); 
  }

  handleAddToCart(productName: string) {
    this.cart.push(productName);
    alert(`"${productName}" fue agregado al carrito`);
  }
 getCartCount(): number {
    return this.cart.length;
  }


}

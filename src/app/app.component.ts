import { Component } from '@angular/core';
import { ProductService,Product } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',

})
export class AppComponent {
   products: Product[] = [];
   filteredProducts: Product[] = [];
   cart: string[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit():void {
    this.products = this.productService.getProducts(); 
    this.filteredProducts = this.products;
  }

  handleAddToCart(productName: string) {
    this.cart.push(productName);
    alert(`"${productName}" fue agregado al carrito`);
  }
 getCartCount(): number {
    return this.cart.length;
  }
  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(term) ||
      product.name.toLowerCase().includes(term)
    );
  }

}

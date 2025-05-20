import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
 products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: string[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService, private router:Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  handleAddToCart(productTitle: string) {
    this.cart.push(productTitle);
    alert(`"${productTitle}" fue agregado al carrito`);
  }

  getCartCount(): number {
    return this.cart.length;
  }

  filterProducts(): void {
    const lowerSearch = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(lowerSearch) ||
      product.name.toLowerCase().includes(lowerSearch)
    );
  }
}

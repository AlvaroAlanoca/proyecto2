import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm:string = '';
    errorMessage: string = '';

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private cartService:CartService) {}

ngOnInit(): void {
  this.productService.getProducts().subscribe((products: Product[]) => {
    this.products = products;
    this.filteredProducts = products;
  });
  
}
  
  handleAddToCart(productName: string): void {
    this.cartService.addToCart(productName);
  }
  filterProducts() {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(term) ||
      product.name.toLowerCase().includes(term)
    );
  }  

  viewDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }
  getCart(): string[] {
  return this.cartService.getCart();
}
}

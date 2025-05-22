import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: string[] = [];

  addToCart(productName: string): void {
    this.cart.push(productName);
    alert(`"${productName}" fue agregado al carrito`);
  }
  getCart(): string[] {
    return this.cart;
  }

  getCartCount(): number {
    return this.cart.length;
  }

  constructor() { }
}

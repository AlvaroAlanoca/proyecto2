import { Component,Input, Output, EventEmitter } from '@angular/core';

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

  @Output() addToCart = new EventEmitter<string>();
  

  onAddToCart() {
    this.addToCart.emit(this.title); 
}

}
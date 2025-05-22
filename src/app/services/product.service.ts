import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Product {
  id:number;
  name: string;
  title: string;
  image: string;
  description:string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl ='http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[] >(this.apiUrl);
      catchError(error => {
        console.error('Error al obtener productos:', error);
        return throwError(() => new Error('Error al cargar productos. Por favor, intenta más tarde.'));
      })
  } 

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('${this.apiUrl}/${id}');
      catchError(error => {
      console.error('Error al obtener detalle del producto:', error);
      return throwError(() => new Error('No se pudo cargar el detalle del producto.'));
      })
  } 

}



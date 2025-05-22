import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponentComponent } from './product-card-component/product-card-component.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponentComponent,
    ProductListComponent,
    ProductDetailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

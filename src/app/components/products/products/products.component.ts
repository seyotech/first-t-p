import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.services';
import { Product } from '../../../models/product.type';
import { ProductComponent } from '../product/product.component';
import { HttpClient } from '@angular/common/http';
import { TopbarComponent } from '../../topbar/topbar/topbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductComponent,
    TopbarComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent implements OnInit {
  detailId = 123;
  constructor(private productSerivice: ProductService, private http: HttpClient) {}
  
  productService: ProductService = inject(ProductService);
  public products: Product[] = [];
  ngOnInit() {
    this.getAllProducts();
  }
  
  private getAllProducts() {
    this.productSerivice.getProducts()
      .subscribe((products) => {
        console.log(products);

        this.products = products.products;
      });
  }
}
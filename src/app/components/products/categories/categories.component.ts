import { Component, inject, OnInit } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProductService } from '../../../services/product.services';
import { Product, ProductCategories, Products } from '../../../models/product.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NzMenuModule,
    CommonModule,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  constructor(private productSerivice: ProductService,) { }
  // productService: ProductService = inject(ProductService);
  productCategories: ProductCategories[] = [];


  ngOnInit() {
    this.getAllCategories();
  }
  private getAllCategories() {
    this.productSerivice.categories()
      .subscribe((categories) => {
        console.log(categories);

        this.productCategories = categories;
      });
  }






}

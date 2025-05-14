import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Product } from '../../../models/product.type';
import { CommonModule } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NzCardModule,
    NzImageModule,
    CommonModule,
    ActionsComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  // @Input({required: true}) products: Product[] = [];
  @Input('products') products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }
  ngOnChanges(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: undefined | product[];

  constructor(private product: ProductService) { }
  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      
      if (result) {
        this.productList = result;
      }
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { Product } from '../interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.products = this.cs.products;
  }

}

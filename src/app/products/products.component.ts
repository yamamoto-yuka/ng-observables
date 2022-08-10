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

  intQty(id:number){
    let index = this.products.findIndex(x=>x.id === id);
    console.log(index);
    this.products[index].qty = this.products[index].qty + 1;
  }

  decQty(id:number){
    let index = this.products.findIndex(x=>x.id === id);
    console.log(index);
    if(this.products[index].qty !== 0){
      this.products[index].qty = this.products[index].qty - 1;
    }
  }

  addToCart(id:number, title:string, price:number, qty:number){
    let cartindex = this.cs.cart.findIndex(x=>x.id === id);
    let productindex = this.products.findIndex(x=> x.id === id);
    console.log("Cart index", cartindex);
    // 0 =  available, -1 = not available

    if(cartindex === -1){
    let cartItem = {
      id:id,
      qty:qty,
      title:title,
      price:price
    }
    this.cs.cart.push(cartItem);
   
    }else{
      this.cs.cart[cartindex].qty = qty;
      // this.products[productindex].qty = qty +1;
    }

    if(qty === 0){
      this.cs.cart.splice(cartindex, 1);
    }
    console.log(this.cs.cart);

    this.cs.cartSubject.next(this.cs.cart);
    console.log(this.cs.cart);
  }


  removeFromCart(id:number){
    let cartindex = this.cs.cart.findIndex(x=>x.id === id);
    this.cs.cart.splice(cartindex,1);
    console.log(this.cs.cart);
  }
  

  ngOnInit(): void {
    this.products = this.cs.products;
  }

}

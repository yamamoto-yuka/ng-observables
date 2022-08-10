import { Injectable } from '@angular/core';
import { CartItem, Product } from '../interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  products:Product[] = [
    {
      id:1,
      title:'65 inch QLED TV',
      price: 799.99,
      qty:0
    },
    {
      id:2,
      title:'88 inch HDR TV',
      price: 499,
      qty:0
    },
    {
      id:3,
      title:'32 inch LED TV',
      price: 199.99,
      qty:0
    },
    {
      id:4,
      title:'50 inch LED TV',
      price: 299.99,
      qty:0
    }
  ];

  // We need to make this cart an OBSERVABLE because that cart label on the top menu is observing this array
  // One that keep changing
  // 1. Import Behavior Subject from rxjs
  // 2. Create a subject of the property that you want to observe. It will bear a copy if the item within it
  // 3. Create an Observable of the subject using this 'asObservable()' method
  // 4. Whenever there is an update to the item,, notify the subject using "next()"
  cart:CartItem[] = [
    {
      id:1,
      title:'something',
      price:24,
      qty:3
    },
    {
      id:2,
      title:'something',
      price:24,
      qty:3
    }
  ];
  cartSubject = new BehaviorSubject(this.cart);
  cartObs = this.cartSubject.asObservable();

  constructor( ) { }
}

import { Injectable } from '@angular/core';
import { myOrders } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  onSubmitOrder() {
    let order = {
      userId: 1,
      productId: 1,
      quantity: 1
    };

    this.submitOrder(order).subscribe(response => {
      console.log("Order response: " + response);
    }, error => {
      console.error("Order response error: " + error);
    });
  }

  submitOrder(order: any){
    return this.http.post('http://localhost:8080/order', order);
  }
}

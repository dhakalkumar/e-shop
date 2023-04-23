import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { myOrders } from '../data-type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  orderList: undefined | myOrders[];

  constructor(private http: HttpClient) { }

  myOrders() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get<myOrders[]>('http://localhost:8080/orders/get', { headers });
  }

}

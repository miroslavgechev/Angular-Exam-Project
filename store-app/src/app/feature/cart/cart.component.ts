import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/types/orderItem';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: OrderItem[] | null = null;
  
constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cart = this.cartDataService.cart;
    debugger
  }



}

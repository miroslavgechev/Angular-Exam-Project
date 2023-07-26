import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/types/orderItem';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: OrderItem[] | null | undefined;
  
constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cart = this.cartDataService.getCartItems();
    
  }

  removeItemFromCart(id: number | string): void{

  }

  increaseQuantity(id: number | string): void{

  }

  decreaseQuantity(id: number | string): void{

  }

  getCartTotal(): number{
    return 100
  }

  getUserCredit(): number{
    return 10501
  }

  checkout(): void{
  }

}

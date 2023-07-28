import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/types/orderItem';
import { CartDataService } from '../cart-data.service';
import { IsUserLoggedInService } from 'src/app/shared/services/is-user-logged-in.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: OrderItem[] | null | undefined;

  constructor(
    private cartDataService: CartDataService,
    private isUserLoggedInService: IsUserLoggedInService
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  removeItemFromCart(id: number | string): void {
    this.cartDataService.removeItemFromCart(id);
    this.loadCart();
  }

  increaseItemQuantity(id: number | string): void {
    this.cartDataService.increaseItemQuantity(id);
    this.loadCart();
  }

  decreaseItemQuantity(id: number | string): void {
    this.cartDataService.decreaseItemQuantity(id);
    this.loadCart();
  }

  getCartTotal(): number {
    return this.cartDataService.getCartTotal();
  }

  isCartEmpty(): boolean {
    return this.cartDataService.isCartEmpty();
  }

  checkout(): void {
    this.cartDataService.cartCheckout();
    this.loadCart();
  }

  private loadCart(): void {
    this.cart = this.cartDataService.getCartItems();
  }

  isUserLoggedIn(): boolean {
    return this.isUserLoggedInService.isUserLoggedIn;
  }
}

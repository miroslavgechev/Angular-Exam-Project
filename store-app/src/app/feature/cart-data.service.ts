import { Injectable } from '@angular/core';
import { DetailedCard } from '../types/cardDetailed';
import { UserCart } from '../types/userCart';
import { ApiService } from '../shared/services/api.service';
import { OrderItem } from '../types/orderItem';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  userCart: UserCart | undefined;
  allCarts: UserCart[] | UserCart | undefined;
  cart: OrderItem[] | null = null;

  constructor(private router: Router) {}

  addItemToCart(item: DetailedCard) {
    const newItem = this.createCartItem(item);
    
    this.cart = this.getCartItems();
    console.log('Before:', this.cart)
    
    if(this.cart === null){
      this.cart = [newItem];
    } else {
      const isItemAlreadyAdded = this.cart.some(
        (cartItem) => cartItem.productId === newItem.productId
      );

      if (isItemAlreadyAdded) {
        const itemIndex = this.cart.findIndex((cartItem) => cartItem.productId === newItem.productId);
        this.cart[itemIndex].quantity++;

      } else {
        this.cart.push(newItem);
      }
    }

    console.log('After:', this.cart)
    this.saveCart();

    this.router.navigate(['/cart']);

  }

  createCartItem(item: DetailedCard): OrderItem {
    return {
      productId: item.id,
      imageUrl: item.imageCatalogUrl,
      model: item.model,
      quantity: 1,
      unitPriceInEur: item.priceInEur,
    };
  }

  getCartItems(): OrderItem[] | null {
    if(localStorage.getItem('curatedCart') === null){
      return null;
    } else {
      return JSON.parse(localStorage.getItem('curatedCart')!)
    }
  }

  saveCart(): void{
    localStorage.setItem('curatedCart', JSON.stringify(this.cart));
  }

  clearCart(): void{
    localStorage.removeItem('curatedCart');
  }
}

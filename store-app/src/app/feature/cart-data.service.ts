import { Injectable } from '@angular/core';
import { DetailedCard } from '../types/cardDetailed';
import { OrderItem } from '../types/orderItem';
import { Router } from '@angular/router';
import { Order } from '../types/order';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  cart: OrderItem[] | null | undefined;

  constructor(private router: Router, private apiService: ApiService) {}

  addItemToCart(item: DetailedCard) {
    const newItem = this.createCartItem(item);

    this.cart = this.getCartItems();

    if (this.cart === null) {
      this.cart = [newItem];
    } else {
      const isItemAlreadyAdded = this.cart.some(
        (cartItem) => cartItem.productId === newItem.productId
      );

      if (isItemAlreadyAdded) {
        const itemIndex = this.cart.findIndex(
          (cartItem) => cartItem.productId === newItem.productId
        );
        this.cart[itemIndex].quantity++;
      } else {
        this.cart.push(newItem);
      }
    }

    this.saveCart();
    this.router.navigate(['/cart']);
  }

  removeItemFromCart(id: number | string): void {
    this.cart = this.getCartItems();

    if (this.cart === null) {
      return;
    }

    const itemIndex = this.cart.findIndex(
      (cartItem) => cartItem.productId === id
    );
    this.cart.splice(itemIndex, 1);
    this.saveCart();
  }

  increaseItemQuantity(id: number | string): void {
    this.cart = this.getCartItems();

    if (this.cart === null) {
      return;
    }

    const itemIndex = this.cart.findIndex(
      (cartItem) => cartItem.productId === id
    );
    this.cart[itemIndex].quantity++;
    this.saveCart();
  }

  decreaseItemQuantity(id: number | string): void {
    this.cart = this.getCartItems();

    if (this.cart === null) {
      return;
    }

    const itemIndex = this.cart.findIndex(
      (cartItem) => cartItem.productId === id
    );

    if (this.cart[itemIndex].quantity === 1) {
      return;
    }

    this.cart[itemIndex].quantity--;
    this.saveCart();
  }

  getCartItems(): OrderItem[] | null {
    if (localStorage.getItem('curatedCart') === null) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem('curatedCart')!);
    }
  }

  getCartTotal(): number {
    let total = 0;

    this.cart = this.getCartItems();

    if (this.cart === null) {
      return total;
    }

    this.cart.forEach((item) => {
      total += item.quantity * item.unitPriceInEur;
    });

    return total;
  }

  saveCart(): void {
    localStorage.setItem('curatedCart', JSON.stringify(this.cart));
  }

  clearCart(): void {
    localStorage.removeItem('curatedCart');
  }

  cartCheckout(): void {
    debugger;
    const items = this.getCartItems();
    const order = this.createOrder(items!);

    this.apiService.postOrder(order).subscribe({
      next: () => {
        this.clearCart();
        // !!!! NAVIGATE TO PROFILE WHERE ORDER CAN BE SEEN!

      },
      error: (err) => {
        console.log(err);
      },
      // !!!! IF ERROR IT SHOULD BE SHOWN! FIGURE OUT HOW!
    });
  }

  createOrder(items: OrderItem[]): Order {
    return {
      userId: this.getUserId(),
      orderDate: new Date().toISOString(),
      items: items,
    };
  }

  isCartEmpty(): boolean {
    const currentCart = this.getCartItems();

    if (currentCart !== null) {
      return currentCart.length === 0;
    }

    return true;
  }

  // getUserCredit(): number {
  //   if (localStorage.getItem('curatedUser') === null) {
  //     return 0;
  //   } else {
  //     return JSON.parse(localStorage.getItem('curatedUser')!).creditInEur;
  //   }
  // }

  createCartItem(item: DetailedCard): OrderItem {
    return {
      productId: item.id,
      imageUrl: item.imageCatalogUrl,
      model: item.model,
      quantity: 1,
      unitPriceInEur: item.priceInEur,
    };
  }

  getUserId(): number | string {
    if (localStorage.getItem('curatedUser') === null) {
      return 0;
    } else {
      return JSON.parse(localStorage.getItem('curatedUser')!).id;
    }
  }
}

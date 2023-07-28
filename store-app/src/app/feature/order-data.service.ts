import { Injectable } from '@angular/core';
import { OrderItem } from '../types/orderItem';
import { Order } from '../types/order';
import { UtilityService } from '../shared/services/utility.service';
import { ApiService } from '../shared/services/api.service';
import { Observable, catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OrderDataService {
  constructor(
    private utilityService: UtilityService,
    private apiService: ApiService,
    private router: Router
  ) {}

  createOrder(items: OrderItem[]): Order {
    return {
      userId: this.utilityService.getUserId(),
      orderDate: new Date().toISOString(),
      items: items,
    };
  }

  getOrdersForLoggedUser(): Observable<Order[] | null> {
    const id = this.utilityService.getUserId();

    return this.apiService.getOrders().pipe(
      map((orders) => {
        console.log(orders);
        return Object.values(orders).filter((order) => order.userId === id);
      }),
      catchError((err) => {
        console.log(err);
        return of<Order[] | null>(null);
      })
    );
  }

  isOrderListEmpty(orders: Order[] | null): boolean {
    return this.utilityService.isArrayEmpty(orders);
  }

  getOrderTotal(order: Order[] | null, itemIndex: number): number {
    let total = 0;

    if (order === null) {
      return total;
    } else {
      order[itemIndex].items.forEach((item) => {
        total += item.quantity * item.unitPriceInEur;
      });

      return total;
    }
  }

  navigateToOrders(): void {
    this.router.navigate(['/profile']);
  }
}

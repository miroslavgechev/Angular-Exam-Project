import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../order-data.service';
import { Order } from 'src/app/types/order';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  orders: Order[] | null = null;
  userEmail: string | null = null;
  userUsername: string | null = null;


  constructor(private orderDataService: OrderDataService, private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.loadProfile();
    this.loadOrders();
  }

  loadProfile() {
    this.userEmail = this.utilityService.getUserEmail();
    this.userUsername = this.utilityService.getUserUsername();
  }

  loadOrders() {
    this.orderDataService.getOrdersForLoggedUser().subscribe({
      next: (userOrders) => {
        this.orders = userOrders;
        this.orders?.reverse();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  isOrderListEmpty(): boolean {
    return this.orderDataService.isOrderListEmpty(this.orders);
  }

  getOrdetTotal(itemIndex: number): number{
    return this.orderDataService.getOrderTotal(this.orders, itemIndex);
  }
}

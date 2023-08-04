import { Injectable } from '@angular/core';
import { OrderItem } from 'src/app/types/orderItem';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyService {

  constructor(private utilityService: UtilityService) { }

  isCartEmpty(): boolean {
    const currentCart = this.utilityService.getCartItems();

    return this.utilityService.isArrayEmpty(currentCart);
  }

}

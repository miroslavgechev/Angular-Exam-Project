import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  getUserId(): number | string {
    if (localStorage.getItem('curatedUser') === null) {
      return 0;
    } else {
      return JSON.parse(localStorage.getItem('curatedUser')!).id;
    }
  }

  isArrayEmpty(array: any[] | null): boolean {
    if (array === null) {
      return true;
    } else {
      return array.length === 0;
    }
  }
}

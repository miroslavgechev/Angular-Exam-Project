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

  getUserUsername(): string | null{
    if (localStorage.getItem('curatedUser') === null) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem('curatedUser')!).username;
    }
  }

  getUserEmail(): string | null{
    if (localStorage.getItem('curatedUser') === null) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem('curatedUser')!).email;
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

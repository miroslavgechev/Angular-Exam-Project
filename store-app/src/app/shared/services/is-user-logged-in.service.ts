import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IsUserLoggedInService {

  constructor() { }

  get isUserLoggedIn(): boolean {
    return !!sessionStorage.getItem('curatedAuthToken');
  }
}

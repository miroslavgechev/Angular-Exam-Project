import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  constructor(private authService: AuthService) { }

  logout(){
    this.authService.logout()
  }
}

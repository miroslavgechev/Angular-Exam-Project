import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { API_URL_EXT, USER_API_URL } from 'src/app/shared/constants';
import { CartDataService } from '../feature/cart-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];

  constructor(
    private http: HttpClient,
    private cartDataService: CartDataService
  ) {}

  register(email: string, password: string): boolean {
    this.getAllUsers();

    if (this.users && this.isEmailInDb(email)) {
      return true;
    }

    const user = this.formUserInJSON(email, password);

    this.http.post(`${USER_API_URL}${API_URL_EXT}`, user).subscribe({
      next: () => {
        this.setUser(user);
      },
      error: (err) => console.log(err),
    });

    return false;
  }

  login(email: string, password: string): boolean {
    this.getAllUsers();

    if (this.users) {
      return this.isEmailPasswordMatch(email, password);
    }

    return false;
  }

  logout(): void {
    this.removeUser();
  }

  getAllUsers() {
    return this.http.get(`${USER_API_URL}${API_URL_EXT}`).subscribe((users) => {
      this.users = users as User[];
    });
  }

  private isEmailInDb(email: string): boolean {
    return Object.values(this.users).some((user) => user.email === email);
  }

  private isEmailPasswordMatch(email: string, password: string): boolean {
    const user = Object.values(this.users).find((user) => user.email === email);
    const isPasswordCorrect = user?.password === password;

    if (isPasswordCorrect) {
      this.setUser(user);
    }

    return isPasswordCorrect;
  }

  private setUser(user: User): void {
    localStorage.setItem('curatedUser', JSON.stringify(user));
  }

  private removeUser(): void {
    localStorage.removeItem('curatedUser');
    this.cartDataService.clearCart();
  }

  private formUserInJSON(email: string, password: string): User {
    return {
      id: this.generateUniqueId(),
      email,
      username: email.substring(0, email.indexOf('@')),
      password,
      address: {
        country: '',
        city: '',
        street: '',
      },
      tel: '',
      creditInEur: 0,
    };
  }

  private generateUniqueId(): string {
    const timestamp = new Date().getTime().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 10);
    return timestamp + randomStr;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/user';
import { API_URL_EXT, USER_API_URL } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = {} as User;
  users: User[] = [];

  constructor(private http: HttpClient) {}

  register(email: string, password: string): boolean {
    this.getAllUsers();
    
    if (this.users) {
      const isEmailTaken = this.isEmailInDb(email);
      if (isEmailTaken) {
        return true;
      }
    }

    this.user = this.formUserInJSON(email, password);

    this.http.post(`${USER_API_URL}${API_URL_EXT}`, this.user).subscribe({
      next: () => {
        this.setTokens(this.user.id, this.user.email, this.user.creditInEur);

      },
      error: (err) => console.log(err),
    });

    return false;
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
      creditInEur: 0
    };
  }

  getAllUsers() {
    return this.http.get(`${USER_API_URL}${API_URL_EXT}`).subscribe((users) => {
      this.users = users as User[];
    });
  }

  private isEmailInDb(email: string): boolean {
    return Object.values(this.users).some((user) => user.email === email);
  }

  private setTokens(token: string, email: string, creditInEur: number) {
    sessionStorage.setItem('curatedAuthToken', token);
    sessionStorage.setItem('curatedEmail', email);
    sessionStorage.setItem('curatedCredit', creditInEur.toString());
  }

  private generateUniqueId(): string {
    const timestamp = new Date().getTime().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 10);
    return timestamp + randomStr;
  }
}

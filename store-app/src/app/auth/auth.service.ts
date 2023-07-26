import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/user';
import { API_URL_EXT, USER_API_URL } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  register(email: string, password: string): boolean {
    this.getAllUsers();
    debugger
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

  logout(): void{
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
    // this.setUserTokens(user.id, user.email, user.creditInEur);
    debugger
    sessionStorage.setItem('curatedUser', JSON.stringify(user));
    console.log(sessionStorage)
  }

  removeUser(): void {
   this.removeUserTokens();
  }

  private setUserTokens(token: string, email: string, creditInEur: number) {
    sessionStorage.setItem('curatedAuthToken', token);
    sessionStorage.setItem('curatedEmail', email);
    sessionStorage.setItem('curatedCredit', creditInEur.toString());
  }

  // private setUserAsToken(user: User){
  //   sessionStorage.setItem('curatedUser', JSON.stringify(user));
  // }

  private removeUserTokens(){
    sessionStorage.removeItem('curatedAuthToken');
    sessionStorage.removeItem('curatedEmail');
    sessionStorage.removeItem('curatedCredit');
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

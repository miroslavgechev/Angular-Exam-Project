import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { API_URL_EXT, USER_API_URL } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = {} as User;
  users: User[] = [];

  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    this.user = this.formUserJSON(email, password);

    this.http
      .post(`${USER_API_URL}${API_URL_EXT}`, this.user)
      .subscribe({
        next: (id) => {
          console.log(id)
          this.setAuthToken(this.user.id);
        },
        error: (err) => console.log(err),
      });
  }

  private formUserJSON(email: string, password: string): User {
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
    };
  }

  getAllUsers() {
    return this.http.get<User[]>(`${USER_API_URL}${API_URL_EXT}`);
  }

  setAuthToken(token: string) {
    localStorage.setItem('curatedAuthToken', token);
  }

  generateUniqueId(): string {
    const timestamp = new Date().getTime().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 10); // You can adjust the length of the random string
    return timestamp + randomStr;
  }

}

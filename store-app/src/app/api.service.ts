import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './types/card';
import { CATALOG_API_URL } from 'src/constants';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCatalog(){
    return this.http.get<Card[]>(CATALOG_API_URL)
  }
}

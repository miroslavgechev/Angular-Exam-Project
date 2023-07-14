import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './types/card';
import { CATALOG_API_URL, CATALOG_API_URL_EXT } from 'src/constants';
import { DetailedCard } from './types/detailedCard';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCatalog(){
    return this.http.get<Card[]>(`${CATALOG_API_URL}${CATALOG_API_URL_EXT}`)
  }

  getItemDetails(id: number){
    return this.http.get<DetailedCard>(`${CATALOG_API_URL}/${id}${CATALOG_API_URL_EXT}`)
  }
}

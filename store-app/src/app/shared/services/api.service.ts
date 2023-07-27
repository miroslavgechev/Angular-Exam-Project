import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_EXT, CATALOG_API_URL, ORDERS_API_URL } from 'src/constants';
import { Card } from 'src/app/types/card';
import { DetailedCard } from 'src/app/types/cardDetailed';
import { Order } from 'src/app/types/order';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCatalog() {
    return this.http.get<Card[]>(`/api/purifiers${API_URL_EXT}`);
  }

  getItemDetails(id: number) {
    return this.http.get<DetailedCard>(
      `${CATALOG_API_URL}/${id}${API_URL_EXT}`
    );
  }

  postOrder(order: Order) {
    return this.http.post<Order>(`${ORDERS_API_URL}${API_URL_EXT}`, order);
  }
}

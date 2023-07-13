import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{

  cardsList: Card[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    this.apiService.getCatalog().subscribe({
      next: cards => {
        this.cardsList = cards;
        console.log(this.cardsList);
      },
      error: err => console.log(err)
    }
    );
  }

}

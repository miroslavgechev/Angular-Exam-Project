import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{

  cardsList: Card[] = [];
  imageLoaded: boolean[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    this.apiService.getCatalog().subscribe({
      next: cards => {
        this.cardsList = cards;

        for(let i = 0; i < this.cardsList.length; i++){
          this.imageLoaded.push(false);
        }
      },
      error: err => console.log(err)
    }
    );
  }

  onImageLoad(index: number){
    this.imageLoaded[index] = true;
  }

}

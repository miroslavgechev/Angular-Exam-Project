import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DetailedCard } from 'src/app/types/detailedCard';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  item!: DetailedCard;
  filters: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];

    this.apiService.getItemDetails(id).subscribe( {
      next: cardDetails => {
        this.item = cardDetails;
        this.filters = this.item.specs.filters.join('/');
      },
      error: err => console.log(err)
    });

  }
}

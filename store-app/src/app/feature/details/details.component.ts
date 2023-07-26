import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { DetailedCard } from 'src/app/types/cardDetailed';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  item: DetailedCard | undefined;
  filters: string = '';
  activeIndex: number = 0;
  galleryLength: number = 0;
  imageLoaded: boolean[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];

    this.apiService.getItemDetails(id).subscribe({
      next: (cardDetails) => {
        this.item = cardDetails;
        this.filters = this.item.specs.filters.join('/');
        this.galleryLength = this.item.imageDetailsUrl.length;

        for (let i = 0; i < this.galleryLength; i++) {
          this.imageLoaded.push(false);
        }
      },
      error: (err) => console.log(err),
    });
  }

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.galleryLength;
  }

  prevImage() {
    this.activeIndex =
      (this.activeIndex - 1 + this.galleryLength) % this.galleryLength;
  }

  onImageLoad(index: number) {
    this.imageLoaded[index] = true;
  }
}

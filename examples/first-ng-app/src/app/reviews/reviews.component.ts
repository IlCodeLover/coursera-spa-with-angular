import { Component, inject, signal } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { Review } from '../model/review.type';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviewService = inject(ReviewsService);

  reviewItems = signal<Array<Review>>([]); // signal to hold the array of review items
  ngOnInit(): void {
    console.log("ReviewsComponent is initialized");
    console.log(this.reviewService.reviewItems);
    this.reviewItems.set(this.reviewService.reviewItems)
  }
}

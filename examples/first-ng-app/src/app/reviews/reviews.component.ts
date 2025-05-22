import { Component, inject, signal } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { Review } from '../model/review.type';
import { catchError } from 'rxjs';

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
    //console.log("ReviewsComponent is initialized");
    //console.log(this.reviewService.reviewItems);
    //this.reviewItems.set(this.reviewService.reviewItems)
    this.reviewService.getReviewsFromAPI()
    .pipe(
      catchError((error) => {
        console.error('Error fetching reviews:', error);
        throw error; // Return an empty array in case of error
      })
    )
    .subscribe((reviews) => {
      this.reviewItems.set(reviews) // set the signal with the fetched reviews
    });
  }
}

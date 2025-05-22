import { Injectable } from '@angular/core';
import { Review } from '../model/review.type';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  // initializing the reviewItems array with some sample data
  reviewItems: Array<Review> = [
    {
      userId: 1,
      title: 'Review 1',
      completed: false,
      id: 1
    }, {
      userId: 2,
      title: 'Review 2',
      completed: true,
      id: 2
    }
  ]
  constructor() { }
}

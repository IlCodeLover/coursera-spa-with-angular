import { inject, Injectable } from '@angular/core';
import { Review } from '../model/review.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
 
  //constructor() { }

  // declare http
  http = inject(HttpClient);
  // Initializing review data from API call
  
  getReviewsFromAPI() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Array<Review>>(url);
  }
}

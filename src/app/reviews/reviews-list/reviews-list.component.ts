import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Review, ReviewType } from '../review.model';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  reviews1$!: Observable<Review[]>;
  reviews7$!: Observable<Review[]>;
  reviews30$!: Observable<Review[]>;
  date = (new Date()).toLocaleDateString("en-GB");



  constructor(public reviewService: ReviewsService) { }

  ngOnInit(): void {
    console.log(this.date)
    this.reviews1$ = this.reviewService.getUserReviews(1);
    this.reviews7$ = this.reviewService.getUserReviews(7);
    this.reviews30$ = this.reviewService.getUserReviews(30);
  }

  createReview(title: string) {
    this.reviewService.createReview(title);
  }
  concluirReview(review: Review, typeReview: ReviewType) {
    this.reviewService.setNextReview(review, typeReview);

  }

}

import { ReviewsService } from 'src/app/services/reviews.service';
import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent {

  valueForm!: string
  @Output() emitReview = new EventEmitter();

  constructor(private reviewService: ReviewsService) { }

createReview() {
  this.emitReview.emit(this.valueForm);
}
}

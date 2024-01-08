import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Review } from '../review.model';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() review!: Review
  @Output() concluirReview = new EventEmitter()

  constructor(public reviewService: ReviewsService) { }

  ngOnInit(): void {

  }

}

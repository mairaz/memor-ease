import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NewReviewComponent } from './new-review/new-review.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [NewReviewComponent, ReviewsListComponent, ReviewComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ReviewsModule { }

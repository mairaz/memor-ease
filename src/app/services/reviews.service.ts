import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Review, ReviewType } from '../reviews/review.model';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const TIMEZONE_OFFSET = (new Date().getTimezoneOffset()) / 60;
const TODAY = ((new Date().getTime()) + TIMEZONE_OFFSET);

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  async createReview(title: string) {
    const user = await this.afAuth.currentUser;
    return this.db.collection<Review>('content').add({
      title: title,
      created_at: TODAY,
      next_review: this.addDays(TODAY,0),
      type_review: 1,
      is_delayed: false,
      uid: user?.uid
    });
  }

  getUserReviews(type: ReviewType): Observable<any> {
    return this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.db.collection<Review>('content', ref =>
          ref.where('uid', '==', user.uid).where('type_review', '==', type)
        )
          .valueChanges({ idField: 'id' })
      } else {
        return []
      }
    }))
  }

  setNextReview(review: Review, typeReview: ReviewType) {
    let next_review
    this.db.collection('content').doc(review.id).get().pipe(map(doc => {
      return doc.data()
    })).subscribe((res: any) => {
      next_review = new Date(new Date(res.created_at).getTime() + (7 * 24 * 60 * 60 * 1000)).toLocaleDateString("en-GB");
      this.db.collection('content').doc(review.id).update({ next_review, type_review: typeReview });
    });
  }

  deleteReview(reviewId: any){
    return this.db.collection('content').doc(reviewId).delete();
  }

  addDays(date: number, add: number) {
    const miliseconds = add * 24 * 60 * 60 * 1000;
    return new Date (date + miliseconds).toLocaleDateString("en-GB");
  }
}

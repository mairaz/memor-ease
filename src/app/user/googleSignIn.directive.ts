import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Directive({
  selector: '[googleSignIn]'
})
export class GoogleSignInDirective {

  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}

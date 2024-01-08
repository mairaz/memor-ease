import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAcjgd3Veg7ptTHKfN-JQVC2RSQpS8SkSk",
      authDomain: "review-project-f43c9.firebaseapp.com",
      projectId: "review-project-f43c9",
      storageBucket: "review-project-f43c9.appspot.com",
      messagingSenderId: "39489051797",
      appId: "1:39489051797:web:a75a82d9cc2203d4108f9c"
    }),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

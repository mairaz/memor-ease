import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleSignInDirective} from './googleSignIn.directive';



@NgModule({
  declarations: [
    LoginComponent,
    GoogleSignInDirective
  ],
  exports:[GoogleSignInDirective],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }

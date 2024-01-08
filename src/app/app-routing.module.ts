import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'reviews', loadChildren: () =>import('./reviews/reviews.module').then(m => m.ReviewsModule), canActivate:[AuthGuard]},
{path:'login', loadChildren: () =>import('./user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

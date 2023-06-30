import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSignupComponent } from './app-signup/app-signup.component';

const routes: Routes = [
  {
    path: '',
    component: AppSignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

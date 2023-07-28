import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotAuthUsersGuard } from '../shared/guards/not-auth.guard';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent,
    canActivate: [NotAuthUsersGuard],
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [NotAuthUsersGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class authRoutingModule {}

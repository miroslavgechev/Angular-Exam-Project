import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { IsUserLoggedInService } from '../services/is-user-logged-in.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthUsersGuard implements CanActivate {
  constructor(
    private isUserLoggedInService: IsUserLoggedInService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isUserLoggedInService.isUserLoggedIn) {
      this.router.navigate(['/404']);
      return false;
    } else {
      return true;
    }
  }
}

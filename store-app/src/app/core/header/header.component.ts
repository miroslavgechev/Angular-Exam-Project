import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IsUserLoggedInService } from 'src/app/shared/services/is-user-logged-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isUserLoggedIn(): boolean {
    return !!this.isUserLoggedInService.isUserLoggedIn;
  }

  constructor(
    private router: Router,
    private isUserLoggedInService: IsUserLoggedInService
  ) {}
}

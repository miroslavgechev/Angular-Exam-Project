import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IsUserLoggedInService } from 'src/app/shared/services/is-user-logged-in.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  get isUserLoggedIn(): boolean {
    return !!this.isUserLoggedInService.isUserLoggedIn;
  }

  constructor(private isUserLoggedInService: IsUserLoggedInService) {}
}

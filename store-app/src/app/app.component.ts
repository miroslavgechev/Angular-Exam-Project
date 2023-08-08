import { Component } from '@angular/core';
import { PreviousUrlService } from './shared/services/previous-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'store-app';

  constructor(private previousUrlService: PreviousUrlService) {}
}

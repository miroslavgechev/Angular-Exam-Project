import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PreviousUrlService {
  previousUrl: string = '/';
  private excludedUrls: string[] = ['/signin', '/signup'];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;

        if (!this.excludedUrls.includes(currentUrl)) {
          this.previousUrl = currentUrl;
        }
      }
    });
  }

  getPreviousUrl(): string {
    return this.previousUrl;
  }

  navigateToPreviousUrl(): void {
    this.router.navigate([this.getPreviousUrl()]);
  }
}

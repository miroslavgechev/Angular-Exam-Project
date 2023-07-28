import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private router: Router) { }

  handleError(error: any): void {
    console.log('Global Error Handler:', error);

    this.router.navigate(['/404']);

  }
}

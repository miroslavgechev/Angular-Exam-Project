import { ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control) => {
    const email = control.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) ? null : { emailValidator: true };
  };
}

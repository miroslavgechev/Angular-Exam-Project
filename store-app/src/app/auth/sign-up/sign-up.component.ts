import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../validators/password-match-validator';
import { AuthService } from '../auth.service';
import { emailValidator } from '../validators/email-validator';
import { PreviousUrlService } from 'src/app/shared/services/previous-url.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  isEmailTaken: boolean = false;

  form = this.formBuilder.group({
    email: ['', [Validators.required, emailValidator()]],
    passGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      { validators: [passwordMatchValidator('password', 'rePassword')] }
    ),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private previousUrlService: PreviousUrlService
  ) {}

  ngOnInit(): void {
    this.authService.getAllUsers();
  }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, passGroup } = this.form.value;
    this.isEmailTaken = this.authService.register(email!, passGroup!.password!);

    if (!this.isEmailTaken) {
      this.previousUrlService.navigateToPreviousUrl();
    }
  }
}

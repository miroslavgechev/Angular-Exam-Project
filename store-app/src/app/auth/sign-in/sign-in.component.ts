import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PreviousUrlService } from 'src/app/shared/services/previous-url.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  areCredentialsCorrect: boolean = true;
  loginSuccess: boolean = false;
  username: string | null = null;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  ngOnInit(): void {
    this.authService.getAllUsers();
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private previousUrlService: PreviousUrlService,
    private utilityService: UtilityService
  ) {}

  login(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;
    this.areCredentialsCorrect = this.authService.login(email!, password!);

    if (this.areCredentialsCorrect) {
      this.loginSuccess = true;
      this.username = this.utilityService.getUserUsername();

      setTimeout(() => {
        this.previousUrlService.navigateToPreviousUrl();
        this.loginSuccess = false;
      }, 1000);
    }
  }
}

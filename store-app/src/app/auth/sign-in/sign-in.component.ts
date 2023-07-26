import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isAnyCredentialIncorrect: boolean = true;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  ngOnInit(): void {
    this.authService.getAllUsers();
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  login(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;
    this.isAnyCredentialIncorrect = this.authService.login(email!, password!);
  }
}

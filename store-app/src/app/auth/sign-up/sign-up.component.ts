import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../validators/password-match-validator';
import { User } from 'src/app/types/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit{

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
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
    private authService: AuthService
  ) {}

    ngOnInit(): void {
      this.authService.getAllUsers();
    }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, passGroup } = this.form.value;
    this.authService.register(email!, passGroup!.password!);
  }
}

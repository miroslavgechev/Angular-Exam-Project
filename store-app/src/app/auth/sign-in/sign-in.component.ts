import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  areCredentialsCorrect: boolean = true;

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
    private router: Router
  ) {}

  login(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;
    this.areCredentialsCorrect = this.authService.login(email!, password!);

    if(this.areCredentialsCorrect){
      this.router.navigate(['/']);
    }
  }
}

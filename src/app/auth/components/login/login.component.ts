import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../../services/auth-api.service';
import { Router } from '@angular/router';
import { tuiFadeIn, tuiHeightCollapseList } from '@taiga-ui/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [tuiFadeIn, tuiHeightCollapseList]
})
export class LoginComponent {
  
  loginForm: FormGroup;
  isLoggingIn = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.isLoggingIn = true;
    if (this.loginForm.valid) {
      this.authService.signIn({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }).subscribe((data) => {
        console.log('Logged in', data);
        this.router.navigate(['/reports']);
      })
    }
  }

}

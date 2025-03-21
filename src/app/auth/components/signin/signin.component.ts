import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-api.service';
import { Router } from '@angular/router';
import { tuiFadeIn } from '@taiga-ui/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less'],
  animations: [tuiFadeIn]
})
export class SignInComponent {
  
  signInForm: FormGroup;
  isLoggingIn = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  signIn() {
    this.isLoggingIn = true;
    if (this.signInForm.valid) {
      this.authService.signIn({
        email: this.signInForm.value.email,
        password: this.signInForm.value.password
      }).subscribe((data) => {
        this.router.navigate(['/reports']);
      })
    }
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-api.service';
import { Router } from '@angular/router';
import { tuiFadeIn } from '@taiga-ui/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.less',
  animations: [tuiFadeIn]
})
export class SignupComponent {
  signupForm: FormGroup;
  isLoggingIn = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password?.value === confirmPassword?.value) {
      return null;
    }
    return { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoggingIn = true;
      const { firstName, lastName, email, password } = this.signupForm.value;

      /* this.authService.signup(email, password).subscribe({
        next: (response) => {
          this.authService.updateProfile(firstName, lastName).subscribe({
            next: () => {
              this.router.navigate(['/reports']);
            },
            error: (error) => {
              console.error('Error updating profile:', error);
              this.isLoggingIn = false;
            }
          });
        },
        error: (error) => {
          console.error('Signup error:', error);
          this.isLoggingIn = false;
        }
      }); */
    }
  }
}

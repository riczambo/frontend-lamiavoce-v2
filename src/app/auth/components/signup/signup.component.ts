import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.less'
})
export class SignupComponent {

  constructor() {}

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid && this.passwordsMatch(signupForm)) {
      const { firstName, lastName, email, password } = signupForm.value;
      console.log('Nome:', firstName);
      console.log('Cognome:', lastName);
      console.log('Email:', email);
      console.log('Password:', password);
      
      signupForm.reset();
    }
  }

  passwordsMatch(signupForm: NgForm): boolean {
    const passwordControl = signupForm.controls['password'];
    const confirmPasswordControl = signupForm.controls['confirmPassword'];

    if (!passwordControl || !confirmPasswordControl) {
      return false;
    }

    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
    return password === confirmPassword;
  }
}

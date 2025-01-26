import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthStateService } from '../commons/services/auth-state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authState: AuthStateService, private router: Router) {}

  canActivate(): boolean {
    if (this.authState.isAuthenticated()) {
      console.log('User is logged in');
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

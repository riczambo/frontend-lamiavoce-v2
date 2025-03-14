import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  isLoggedIn = this.afAuth.authState;

  constructor(private afAuth: AngularFireAuth) {
  }

  logout(): void {
    this.afAuth.signOut();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  isLoggedIn = this.afAuth.authState;
  private userSubject = new BehaviorSubject<UserInfo | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.userSubject.next(user);
    });
  }

  get currentUser(): UserInfo | null {
    return this.userSubject.value;
  }

  logout(): void {
    this.afAuth.signOut();
  }
}

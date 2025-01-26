import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      this.isLoggedIn.next(!!user);
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  logout(): void {
    this.afAuth.signOut();
  }
}

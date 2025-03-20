import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { updateProfile, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(
    private auth: AngularFireAuth
  ) {}

  signIn(params: SignIn): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(
      params.email,
      params.password));
  }

  signup(email: string, password: string) {
    return from(this.auth.createUserWithEmailAndPassword(email, password));
  }  

  updateProfile(firstName: string, lastName: string) {
    const user = this.auth.user;
    if (!user) return from(Promise.reject('No user logged in'));
    
    return from(updateProfile(user as any, {
      displayName: `${firstName} ${lastName}`
    }));
  }
}

type SignIn = {
  email: string;
  password: string;   
}

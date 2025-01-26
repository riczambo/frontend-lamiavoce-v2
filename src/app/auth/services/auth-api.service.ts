import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, from, Observable, of } from 'rxjs';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth
  ) {}

  signIn(params: SignIn): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(
      params.email,
      params.password));
  }

}

type SignIn = {
  email: string;
  password: string;   
}

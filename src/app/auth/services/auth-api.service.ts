import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";
import { initializeApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private auth = getAuth(initializeApp(environment.firebaseConfig));
  private provider = new GoogleAuthProvider();
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }
  
  get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  signIn(params: SignIn): Observable<any> {
    return from(
      setPersistence(this.auth, browserSessionPersistence).then(() => {
        return this.fireAuth.signInWithEmailAndPassword(params.email, params.password);
      })
    );
  }

  signup(email: string, password: string) {
    return from(this.fireAuth.createUserWithEmailAndPassword(email, password));
  }

  signInWithGoogle(): Observable<any> {
    return from(
      setPersistence(this.auth, browserSessionPersistence).then(() => {
        return signInWithPopup(this.auth, this.provider);
      }).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          console.log('Access Token:', token);
        } else {
          console.warn('Credential is null, token not available');
        }
        const user = result.user;
        console.log('User Info:', user);
        return user;
      }).catch((error) => {
        console.error('Error during Google sign-in:', error);
        throw error;
      })
    );
  }

  signOut() {
    return from(
      signOut(this.auth).then(() => {
        console.log('User signed out');
        this.router.navigate(['/reports']);
      }).catch((error) => {
        console.error('Sign out error:', error);
        throw error;
      })
    );
  }
}

type SignIn = {
  email: string;
  password: string;   
}

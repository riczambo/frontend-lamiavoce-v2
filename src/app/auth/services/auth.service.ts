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
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  updateProfile,
  validatePassword
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

  signUp(email: string, password: string, displayName: string): Observable<any> {
    return from(
      validatePassword(this.auth, password)
        .then(status => {
          if (!status.isValid) {
            console.error("Password non valida. Dettagli:");
            if (status.containsLowercaseLetter === false) {
              console.error("- Deve contenere almeno una lettera minuscola.");
            }
            if (status.containsUppercaseLetter === false) {
              console.error("- Deve contenere almeno una lettera maiuscola.");
            }
            if (status.containsNumericCharacter === false) {
              console.error("- Deve contenere almeno un numero.");
            }
            if (status.meetsMinPasswordLength === false) {
              console.error("- Deve avere una lunghezza minima.");
            }
            if (status.meetsMaxPasswordLength === false) {
              console.error("- Supera la lunghezza massima.");
            }
  
            return Promise.reject("La password non soddisfa i requisiti.");
          }
  
          return createUserWithEmailAndPassword(this.auth, email, password);
        })
        .then(userCredential => {
          const user = userCredential.user;
          return updateProfile(user, { displayName });
        })
        .then(() => {
          console.log("Registrazione e aggiornamento profilo completati!");
        })
    );
  }

  signInWithGoogle(): Observable<any> {
    return from(
      setPersistence(this.auth, browserSessionPersistence).then(() => {
        return signInWithPopup(this.auth, this.provider);
      }).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
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

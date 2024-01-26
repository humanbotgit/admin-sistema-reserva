import { Injectable, inject } from '@angular/core';
import {
  Auth,
  AuthProvider,
  GoogleAuthProvider,
  UserCredential,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';

import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  readonly authState$ = authState(this.auth);
  signUpWithEmailAndPassword(usuario: Usuario): Promise<UserCredential> {
    return createUserWithEmailAndPassword(
      this.auth,
      usuario.email,
      usuario.password
    );
  }
  logInWithEmailAndPassword(usuario: Usuario) {
    return signInWithEmailAndPassword(
      this.auth,
      usuario.email,
      usuario.password
    );
  } 
  logOut(): Promise<void> {
    return this.auth.signOut();
  }
  signInWithGoogleProvider(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();

    return this.callPopUp(provider);
  }
  async callPopUp(provider: AuthProvider): Promise<UserCredential> {
    try {
      const result = await signInWithPopup(this.auth, provider);

      return result;
    } catch (error: any) {
      return error;
    }
  }
}
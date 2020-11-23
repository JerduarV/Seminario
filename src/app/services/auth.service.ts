import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase';

import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    )
  }

  async sendVerificationEmail(): Promise<void>{
    try {
      return (await this.afAuth.auth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  async resetPasswrod(email: string): Promise<void>{
    try {
      return this.afAuth.auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  async loginGoogle(): Promise<User>{
    try {
      const { user } = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.auth.signOut();
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async login(email: string, pass: string): Promise<User> {
    try {
      const { user } = await this.afAuth.auth.signInWithEmailAndPassword(email, pass);
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async register(email: string, pass: string): Promise<User>{
    try {
      const { user } = await this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log('Error:', error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    }

    return userRef.set(data, {merge: true});
  }

  isVerified(user: User): boolean{
    return user.emailVerified === true ? true : false;
  }
}

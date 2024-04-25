import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private ngFireAuth: AngularFireAuth, private firestore : AngularFirestore) { }

  async registerUser(email: string, password: string) {
    try {
      const userCredential = await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
      
      return userCredential;
    } catch (error) {
      
      throw error;
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const userCredential = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
      
      return userCredential;
    } catch (error) {
      
      throw error;
    }
  }

  async signOut() {
    try {
      return await this.ngFireAuth.signOut();
     
    } catch (error) {
      
      throw error;
    }
  }

}
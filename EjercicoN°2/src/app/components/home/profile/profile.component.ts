import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authetication.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userData: Observable<any> | undefined;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore, private route : Router, private authservice : AuthenticationService) { }

  ngOnInit(){
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userData = this.firestore.collection('users').doc(user.uid).valueChanges();
      }
    });
  }

  async logout(){
    this.authservice.signOut().then(() => {
      this.route.navigate(['/']);
    });
  }

}

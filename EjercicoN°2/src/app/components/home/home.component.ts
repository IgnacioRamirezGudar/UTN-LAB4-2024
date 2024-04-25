import { Component } from '@angular/core';
import { RouterLink , RouterOutlet, Router, NavigationEnd} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../../services/authetication.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showContainer2: boolean = true;

  constructor(private router: Router, private auth: AngularFireAuth, private firestore: AngularFirestore, private route : Router, private authservice : AuthenticationService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showContainer2 = event.url !== '/home/category-profile';
      }
    });
  }

  async logout(){
    this.authservice.signOut().then(() => {
      this.route.navigate(['/']);
    });
  }

}

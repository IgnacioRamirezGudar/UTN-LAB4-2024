import { Component } from '@angular/core';
import { RouterLink , RouterOutlet, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  showContainer2: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showContainer2 = event.url !== '/login' && event.url !== '/register';
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authetication.service';
import { Route, Router, RouterOutlet } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logForm! : FormGroup;

  constructor(public formbuilder : FormBuilder, public authService : AuthenticationService, public router : Router) {}

  ngOnInit(): void {
    this.logForm = this.formbuilder.group({
      email : ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get errorControl(){
    return this.logForm?.controls;
  }

  async login(){
    if(this.logForm?.valid){
      const user = await this.authService.loginUser(this.logForm.value.email, this.logForm.value.password).catch((error) => {
        console.log(error);
      });

      if(user){
        this.router.navigate(['/home']);
      }

    }
  }

}

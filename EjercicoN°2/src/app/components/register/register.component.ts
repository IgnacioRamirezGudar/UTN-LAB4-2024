import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authetication.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  regForm!: FormGroup;

  constructor(public formbuilder : FormBuilder, public authService : AuthenticationService, public router : Router, private firestore : AngularFirestore) {}

  ngOnInit(): void {
    this.regForm = this.formbuilder.group({
      fullname : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get errorControl(){
    return this.regForm?.controls;
  }

  async signUp() {
    if (this.regForm.valid) {
      try {
        const userCredential = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password);
        if (userCredential && userCredential.user) {
          const { uid } = userCredential.user;
          await this.saveUserData(uid, this.regForm.value.fullname, this.regForm.value.email);
          this.router.navigate(['/home']);
        } else {
          // Manejar el caso en el que no se obtiene un userCredential correctamente
        }
      } catch (error) {
        // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error al registrar usuario:', error);
      }
    }
  }

  async saveUserData(userId: string, fullname: string, email: string) {
    try {
      await this.firestore.collection('users').doc(userId).set({
        fullname: fullname,
        email: email
      });
      
    } catch (error) {
      
    }
  }

}

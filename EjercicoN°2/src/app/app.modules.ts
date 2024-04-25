import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './services/auth.guard';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
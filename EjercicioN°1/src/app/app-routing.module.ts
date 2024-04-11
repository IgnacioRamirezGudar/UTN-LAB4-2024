import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Ejern1Component } from './ejern1/ejern1.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home/ejercicioN1', component : Ejern1Component},
  {path: 'home/bienvenido', component : BienvenidoComponent},
  {path: 'home/login', component : LoginComponent},
  {path: 'home/error', component : ErrorComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }

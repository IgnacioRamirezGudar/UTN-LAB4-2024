import { NgModule } from '@angular/core';
import { RouterModule, RouterState, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth.guard';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'error', component: ErrorComponent }
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'category-profile', component: ProfileComponent }
        ]
    }
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
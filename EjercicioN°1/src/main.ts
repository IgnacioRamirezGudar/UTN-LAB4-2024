/*import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

enableProdMode(); // Esto solo en producción

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.modules';
import { enableProdMode } from '@angular/core';

enableProdMode(); // Esto solo en producción

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
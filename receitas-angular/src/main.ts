import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as firebase from 'firebase';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AuthService } from './app/core/auth.service';

if (environment.production) {
  enableProdMode();
}

firebase.initializeApp({
  apiKey: environment.apiKey,
  authDomain: environment.authDomain
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

import { enableProdMode } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Check localstorage for language and load the file
console.log('Localstorage locale', localStorage.getItem('locale'));
const locale = localStorage.getItem('locale') || 'en';

if (locale !== 'en') {
  fetch('/assets/' + locale + '.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      return response.json();
    })
    .then((json) => {
      // Load translation
      loadTranslations(json.translations);

      // Bootstrap app
      platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((err) => console.error(err));
    })
    .catch(function () {
      //Err
    });
} else {
  // Bootstrap app
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

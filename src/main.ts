import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { environment } from './environments/environment';

const app = initializeApp(environment.firebaseConfig);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(environment.appCheckKey),
  isTokenAutoRefreshEnabled: true
});

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));

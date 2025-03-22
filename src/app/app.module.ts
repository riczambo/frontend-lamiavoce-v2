import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { TuiRoot } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonsModule } from './commons/commons.module';
import { ReportModule } from './report/report.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Firestore, getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CommonsModule,
    ReportModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    TuiRoot
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    { provide: NZ_I18N, useValue: it_IT },
    NG_EVENT_PLUGINS,
    { provide: Firestore, useFactory: () => getFirestore(initializeApp(environment.firebaseConfig)) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
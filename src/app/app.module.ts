import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { FirebaseService } from '../providers/firebase-service/firebase-service';

const config = {
  apiKey: "AIzaSyAXAfJ-6LTHkGBtOtlgLM9TdolquSri8qU",
  authDomain: "qa-scanner-2665a.firebaseapp.com",
  databaseURL: "https://qa-scanner-2665a.firebaseio.com",
  projectId: "qa-scanner-2665a",
  storageBucket: "qa-scanner-2665a.appspot.com",
  messagingSenderId: "489657061775"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

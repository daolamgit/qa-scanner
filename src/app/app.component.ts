import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html',
  animations: [
    trigger('splash', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class MyApp {
  rootPage    : string  = 'LoginPage';
  showSplash  : boolean = true;
  loginState  : string  = 'hidden';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      timer(3000).subscribe(() => {
        this.showSplash = false;
        this.loginState = 'visible';
      });
    });
  }
}

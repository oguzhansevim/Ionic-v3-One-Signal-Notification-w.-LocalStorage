import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { OneSignal } from "@ionic-native/onesignal";
import { StorageProvider } from "../providers/storage/storage";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private oneSignal: OneSignal, private _storage: StorageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.oneSignalConfigs();
    });
  }

  oneSignalConfigs() {
    /** OneSignal Config */
    let iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = true;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    this.oneSignal.startInit('%YOUR_ONESIGNAL_APP_ID%', '%YOUR_FCM_PROJECT_NUMBER%').iOSSettings(iosSettings);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((data) => {
        // do something when notification is received
        let payload = data.payload.additionalData; // getting id and action in additionalData.
        this._storage.set('%YOUR_KEY_HERE%', payload).then((res) => {
          //If Success
          console.log(res);
        }).catch((err) => {
          //If Error
          console.log(err);
        });
      }
    );

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      // do something when notification is opened
    });

    this.oneSignal.endInit();
  }
}


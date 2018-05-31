import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      dbProvider.createDatabase().then(() => {        
        this.abrirTabsPage(splashScreen);
      }).catch((e) => {       
        console.log(e);
        this.abrirTabsPage(splashScreen);
      });
    });
  }

  private abrirTabsPage(splashScreen: SplashScreen) {
    splashScreen.hide();    
    this.rootPage = TabsPage;
  }
}
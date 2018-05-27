import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TodosPage } from '../pages/todos/todos';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PaisDetalhePage } from '../pages/pais-detalhe/pais-detalhe';
import { PaisPageModule } from '../pages/pais/pais.module';
import { PaisDetalhePageModule } from '../pages/pais-detalhe/pais-detalhe.module';
import { PaisPage } from '../pages/pais/pais';

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    ContactPage,
    HomePage,
    TabsPage
  
  ],
  imports: [
    BrowserModule,
    PaisPageModule,
    PaisDetalhePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaisPage,
    PaisDetalhePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

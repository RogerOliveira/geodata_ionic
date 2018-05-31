import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PaisDetalhePage } from '../pais-detalhe/pais-detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  continente: any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  listarPaises() {
    this.navCtrl.push(PaisDetalhePage, { "continente": this.continente })
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 100
    });
    loader.present();
  }
}


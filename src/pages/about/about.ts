import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AfricaSulPage } from '../africa-sul/africa-sul';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }  

  goToAfricaSulPage (){
    this.navCtrl.push(AfricaSulPage);
    }
}

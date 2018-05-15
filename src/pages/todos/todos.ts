import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AfricaSulPage } from '../africa-sul/africa-sul';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {

  constructor(public navCtrl: NavController) {

  }  

  goToAfricaSulPage (){
    this.navCtrl.push(AfricaSulPage);
    }
}

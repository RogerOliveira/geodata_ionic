import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';
import { PaisPage } from '../pais/pais';
import { PaisProvider } from '../../providers/pais/pais';

/**
 * Generated class for the PaisDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pais-detalhe',
  templateUrl: 'pais-detalhe.html',
})
export class PaisDetalhePage {

  public paises: Pais[];
  /**pais1: any;
  pais2: any;
  pais3: any;**/

  constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider: PaisProvider) {

    /**if (navParams.get('continente') == 'Africa') {
      this.pais1 = { nome: 'Africa do Sul', capital: 'Cidade do Cabo', populacao: '56,2 milhões', continente: 'África', bandeira: 'zaf.png', icone: 'ico-flag.png' };
      this.pais2 = { nome: 'Zimbabwe', capital: 'Harare', populacao: '16,6 milhões', bandeira: 'zwe.png', continente: 'África', icone: 'ico-flag.png' };
      this.pais3 = { nome: 'Angola', capital: 'Luanda', populacao: '27,4 milhões', continente: 'África', bandeira: 'ago.png', icone: 'ico-flag.png' };

    } else if (navParams.get('continente') == 'Americas') {
      this.pais1 = { nome: 'Brasil', capital: 'Brasília', populacao: '213,4 milhões', continente: 'Américas', bandeira: 'bra.png', icone: 'ico-flag.png' };
      this.pais2 = { nome: 'Canadá', capital: 'Ottawa', bandeira: 'can.png', populacao: '37,0 milhões', continente: 'Américas', icone: 'ico-flag.png' };
      this.pais3 = { nome: 'Estados Unidos', capital: 'Washington D.C.', continente: 'Américas', populacao: '328,9 milhões', bandeira: 'usa.png', icone: 'ico-flag.png' };


    } else if (navParams.get('continente') == 'Asia') {
      this.pais1 = { nome: 'China', capital: 'Pequim', populacao: '1,379 bilhões', bandeira: 'chn.png', continente: 'Ásia', icone: 'ico-flag.png' };
      this.pais2 = { nome: 'Japão', capital: 'Tokyo', populacao: '126,1 milhões', bandeira: 'jpn.png', continente: 'Ásia', icone: 'ico-flag.png' };
      this.pais3 = { nome: 'India', capital: 'Nova Deli', populacao: '1,359 bilhões', bandeira: 'ind.png', continente: 'Ásia', icone: 'ico-flag.png' };


    } else if (navParams.get('continente') == 'Europe') {
      this.pais1 = { nome: 'Reuno Unido', capital: 'Londres', populacao: '65,9 milhões', bandeira: 'gbr.png', continente: 'Europa', icone: 'ico-flag.png' };
      this.pais2 = { nome: 'França', capital: 'Paris', populacao: '65,2 milhões', bandeira: 'fra.png', continente: 'Europa', icone: 'ico-flag.png' };
      this.pais3 = { nome: 'Rússia', capital: 'Moscou', populacao: '146,4 milhões', bandeira: 'rus.png', continente: 'Europa', icone: 'ico-flag.png' };


    } else if (navParams.get('continente') == 'Oceania') {
      this.pais1 = { nome: 'Australia', capital: 'Camberra', continente: 'Oceania', populacao: '8,6 milhões', bandeira: 'aus.png', icone: 'ico-flag.png' };
      this.pais2 = { nome: 'Vanuatu', capital: 'Port Vila', continente: 'Oceania', populacao: '282.504 milhões', bandeira: 'vut.png', icone: 'ico-flag.png' };
      this.pais3 = { nome: 'Tonga', capital: "Nuku'alofa", continente: 'Oceania', populacao: '107.401', bandeira: 'ton.png', icone: 'ico-flag.png' };
    }
    this.paises = [this.pais1, this.pais2, this.pais3];**/
  }

  ionViewDidLoad() {
    this.paisProvider.listar().
      then((paises: Pais[]) => {
        this.paises = paises;
      });
  }
  goToPais(pais: Pais): void {
    this.navCtrl.push(PaisPage, { "pais": pais })
  }

}

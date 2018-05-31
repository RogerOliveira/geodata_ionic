import { DatabaseProvider } from '../database/database';
import { Pais } from '../../model/pais';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the PaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisProvider {

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello PaisProvider Provider');
  }
  public inserir(pais: Pais) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql =
          "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Africa do Sul',	'zaf.png', 'Cidade do Cabo', 'África', '56,2 milhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Zimbabwe',	'zwe.png', 'Harare', 'África', '16,6 milhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Angola',	'ago.png', 'Luanda', 'África', '27,4 milhões', 'ico-flag.png')"

        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Brasil',	'bra.png', 'Brasília', 'Américas', '213,4 milhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Canadá',	'can.png', 'Ottawa', 'Américas', '37,0 milhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Estados Unidos',	'usa.png', 'Washington D.C.', 'Américas', '328,9 milhões', 'ico-flag.png')"

        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('China',	'chn.png', 'Pequim', 'Ásia', '1,379 bilhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Japão',	'jpn.png', 'Tokyo', 'Ásia', '126,1 milhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('India',	'ind.png', 'Nova Deli', 'Ásia', '1,359 bilhões', 'ico-flag.png')"

        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Reuno Unido',	'gbr.png', 'Londres', 'Europa', '65,9 milhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('França',	'fra.png', 'Paris', 'Europa', '65,2 milhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Rússia',	'rus.png', 'Moscou', 'Europa', '146,4 milhões', 'ico-flag.png')"

        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Australia',	'aus.png', 'Camberra', 'Oceania', '8,6 milhões', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Vanuatu',	'vut.png', 'Port Vila', 'Oceania', '282.504', 'ico-flag.png')"
        "INSERT	INTO	pais	(nome, bandeira,	capital, continente, populacao, icone)	VALUES	('Tonga',	'ton.png', 'Nukualofa', 'Oceania', '107.401', 'ico-flag.png')";
        let parametros = [pais.nome, pais.bandeira, pais.capital, pais.continente, pais.populacao, pais.icone];
        return db.executeSql(sql, parametros).
          catch((e) => {
            console.log(e);
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public listar() {    
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {        
        let sql = "SELECT	*	FROM	pais";
        return db.executeSql(sql, []).
          then((data: any) => {           
            if (data.rows.length > 0) {
              let paises: Pais[] = [];             
              for (let i = 0; i < data.rows.length; i++) {
                paises.push(data.rows.item(i));
              }
              return paises;
            }
            else              
              return [];
          });
      }).catch((e) => {
        console.log(e);
      });
  }
}
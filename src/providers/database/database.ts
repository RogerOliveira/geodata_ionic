import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private db: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  openDatabase() {
    return this.db.create({
      name: "clientes.db",
      location: "default"
    });

  }

  createDatabase (){
    return this.openDatabase ().
    then((db:	SQLiteObject)	=>{
    this.createTabelaClientes(db);
    });
    }
    createTabelaClientes (db:	SQLiteObject){
    let sql:	string =	"CREATE	TABLE	IF	NOT	EXISTS	paises	(id	INTEGER	PRIMARY	KEY	AUTOINCREMENT,	" +
    "	bandeira	VARCHAR	(200),	nome	VARCHAR(200),	capital	VARCHAR(200),	regiao	VARCHAR(200),	populacao	VARCHAR(200),	icone	VARCHAR(200))";
    db.executeSql (sql,	{});
    }
}

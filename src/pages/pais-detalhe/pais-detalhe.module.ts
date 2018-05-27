import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisDetalhePage } from './pais-detalhe';

@NgModule({
  declarations: [
    PaisDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(PaisDetalhePage),
  ],
})
export class PaisDetalhePageModule {}

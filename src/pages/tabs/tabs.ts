import { Component } from '@angular/core';

import { TodosPage } from '../todos/todos';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TodosPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

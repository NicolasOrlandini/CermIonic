import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public modalCtrl: ModalController) {

  }

  presentProfileModal() {
    
  }

}

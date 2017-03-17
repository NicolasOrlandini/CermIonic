import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, NavParams} from 'ionic-angular';
import {About} from '../about/about';
import {Experience} from '../experience/experience';
import {Creation} from '../creation/creation';
import {Contact} from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  about = About;
  contact = Contact;
  experience = Experience;
  creation = Creation;

  constructor(public modalCtrl: ModalController) {

  }

  presentProfileModal() {
    
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {About} from '../about/about';
import {Experience} from '../experience/experience';
import {Home} from '../home/home';
import {Contact} from '../contact/contact';

/*
  Generated class for the Creation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-creation',
  templateUrl: 'creation.html'
})
export class Creation {

  about = About;
  contact = Contact;
  experience = Experience;
  home = Home;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Home} from '../home/home';
import {Contact} from '../contact/contact';
import {Creation} from '../creation/creation';
import {Experience} from '../experience/experience';
import { Skill } from '../skill/skill';

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {

  home = Home;
  contact = Contact;
  experience = Experience;
  creation = Creation;
  skill = Skill;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}

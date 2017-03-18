import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {About} from '../about/about';
import {Home} from '../home/home';
import {Creation} from '../creation/creation';
import {Contact} from '../contact/contact';
import { Skill } from '../skill/skill';

/*
  Generated class for the Experience page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html'
})
export class Experience {

  about = About;
  contact = Contact;
  home = Home;
  creation = Creation;
  skill = Skill;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Experience');
  }

}

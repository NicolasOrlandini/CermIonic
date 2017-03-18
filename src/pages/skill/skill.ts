import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {About} from '../about/about';
import {Experience} from '../experience/experience';
import {Home} from '../home/home';
import { Creation } from '../creation/creation';
import {Contact} from '../contact/contact';

/*
  Generated class for the Skill page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html'
})
export class Skill {

  about = About;
  contact = Contact;
  experience = Experience;
  home = Home;
  creation = Creation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Skill');
  }

}

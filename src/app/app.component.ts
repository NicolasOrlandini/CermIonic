import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Experience } from '../pages/experience/experience';
import { Creation } from '../pages/creation/creation';
import { Contact } from '../pages/contact/contact';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, name: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', name: 'home', component: Home },
      { title: 'A propos de moi', name: 'contact', component: About },
      { title: 'Expérience', name: 'briefcase', component: Experience },
      { title: 'Réalisations', name: 'build', component: Creation },
      { title: 'Contact', name: 'mail', component: Contact }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

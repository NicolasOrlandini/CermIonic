import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Experience } from '../pages/experience/experience';
import { Skill } from '../pages/skill/skill';
import { Creation } from '../pages/creation/creation';
import { Contact } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    Home,
    About,
    Experience,
    Skill,
    Creation,
    Contact
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    About,
    Experience,
    Skill,
    Creation,
    Contact
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

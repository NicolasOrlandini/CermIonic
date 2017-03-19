import { Component } from '@angular/core';
import * as $ from "jquery";

import { NavController } from 'ionic-angular';
import { ModalController, NavParams} from 'ionic-angular';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Skill } from '../skill/skill';
import { Creation } from '../creation/creation';
import { Contact } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  about = About;
  contact = Contact;
  experience = Experience;
  creation = Creation;
  skill = Skill;

  constructor(public nav: NavController) {}

    /*ionViewLoaded() {
        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 43.616757,
                lng: 7.0689172
            },
            zoom: 8,
        });
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: 'you are here!'
                });

                // infoWindow.setPosition(pos);
                marker.setMap(map);
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
              'Error: Le service de géolocalisation a failed.' :
              'Error: Votre navigateur ne supporte pas le service de navigation.');
      }

      function hideCloseButton(id) {
          document.getElementById(id).style.display = 'none';
          document.getElementById('map').style.display = 'none';
      }

      function showCloseButton(id) {
          document.getElementById(id).style.display = 'inline-block';
      }
    }*/

}

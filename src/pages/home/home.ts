import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacelocationPage} from '../placelocation/placelocation'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentLongitude: any;
  currentLatitude: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  gotoLocationPage(){
    this.navCtrl.push(PlacelocationPage);
  }

}

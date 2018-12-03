import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/GeoLocation';
import {Client, connect} from 'mqtt';

/**
 * Generated class for the PlacelocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-placelocation',
  templateUrl: 'placelocation.html',
})
export class PlacelocationPage {

  currentLongitude: any;
  currentLatitude: any;
  MClient: Client;
  mqttmessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    this.MClient = connect("broker.hivemq.com", {port: 8000});
    this.MClient.subscribe('giveloc',(err, granted) =>{
      console.log('message from ${topic}: ${payload)');

    } )//array to place the request for location to smartphone
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacelocationPage');
  }

  confirmLocation(){
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.currentLongitude = resp.coords.longitude;
      this.currentLatitude = resp.coords.latitude;
      console.log('Latitude: ' + this.currentLatitude);
      console.log('Longitude: ' + this.currentLongitude);
      this.mqttmessage = (resp.coords.latitude + "," + resp.coords.longitude);

      this.MClient.publish('LORAarryay', this.mqttmessage);

    }).catch((error)=>{
      console.log('Error getting location: ', error)
    })
  }


}

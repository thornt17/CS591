import { Component } from '@angular/core';
import {LATLONGS} from './LATLONGS-MOCK';
import {LATLONG} from './LATLONG';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Latitudes and Departures!';
  latlongs = LATLONGS;
  private mylatlong: LATLONG;


  picklatlong(latlong: LATLONG) {
    this.mylatlong = latlong;

  }
}

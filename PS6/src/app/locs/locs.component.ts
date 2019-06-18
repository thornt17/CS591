import { Component, OnInit } from '@angular/core';
import {MYLOC} from '../locs/MYLOC';
import { LocServiceAsyncService} from './services/locs-service-async.service';

@Component({
  selector: 'app-locs',
  templateUrl: './locs.component.html',
  styleUrls: ['./locs.component.css']
})
export class LocsComponent implements OnInit {

  // contacts: CONTACT[] = CONTACTS;
  my: any = {
    address: '',
    lat: '',
    long: ''
  }

  addLoc( ): void {
    const newLoc: MYLOC = {
      address:       this.my.address,
      lat:           'lat',
      long:          'long',
    };
//    this.contacts.push(newContact);
    this.locsService.addLoc(newLoc)
      .subscribe();
  }

  constructor(private locsService: LocServiceAsyncService) { }

  ngOnInit() {
  }

}

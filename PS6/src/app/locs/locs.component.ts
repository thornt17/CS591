import { Component, OnInit, Input} from '@angular/core';
import {MYLOC} from '../locs/MYLOC';
import { LocServiceAsyncService} from './services/locs-service-async.service';

@Component({
  selector: 'app-locs',
  templateUrl: './locs.component.html',
  styleUrls: ['./locs.component.css']
})


export class LocsComponent implements OnInit {

  @Input() selectedLoc;


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
    this.LocService.addLoc(newLoc)
      .subscribe(
        data => this.selectedLoc = data);

  }

  constructor(private LocService: LocServiceAsyncService) { }

  ngOnInit() {
  }

}

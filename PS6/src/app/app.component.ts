import { Component } from '@angular/core';
// import { CONTACTS} from './CONTACTS-MOCK';
import {MYLOC} from './locs/MYLOC';
import { LocServiceAsyncService} from './locs/services/locs-service-async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Latitudes and Departures';
  private selectedLoc: MYLOC = null;
  locs = []

  getLoc(): void {
    this.LocService.getLoc()
      .subscribe(locs => {
        this.locs = locs;
        console.log(`Locs: ${this.locs}`)
      });
  }


  displayLocDetail(loc: MYLOC) {
    this.selectedLoc = loc;
  }

  constructor(private LocService: LocServiceAsyncService) {

  }
  ngOnInit() {
    this.getLoc();
  }
}

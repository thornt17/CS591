import { Component, OnInit, Input } from '@angular/core';

import {MYLOC} from '../MYLOC';

@Component({
  selector: 'app-locs-detail',
  templateUrl: './locs-detail.component.html',
  styleUrls: ['./locs-detail.component.css']
})
export class LocDetailComponent implements OnInit {

  @Input() selectedLoc: MYLOC;

  constructor() { }

  ngOnInit() {
  }

}

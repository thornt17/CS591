import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MYLOC} from '../MYLOC';


@Injectable({
  providedIn: 'root'
})
export class LocServiceAsyncService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  locsEndpoint = 'http://localhost:3000/ps4';

  getLoc(): Observable<MYLOC[]> {
    return this.httpClient.get<MYLOC[]>(this.locsEndpoint);
  }

  addLoc(newLoc: MYLOC): Observable<any> {
    // We don't need the '_id' property on the back end (probly should fix it there)
    // delete newLoc.address;
    console.log('called service');

    return this.httpClient.post(this.locsEndpoint, newLoc, this.httpOptions);

  }

  constructor(private httpClient: HttpClient) { }
}

import { Injectable } from '@angular/core';
import {MYLOC} from '../MYLOC';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocService {
  locsEndpoint = 'http://localhost:3000/api';
//  contacts = CONTACTS;
  getLocs(): Observable<MYLOC[]> {
    return this.httpClient.get<MYLOC[]>(this.locsEndpoint);
  }

  addLoc(newLoc: MYLOC): any {

    return this.httpClient.post<any>(this.locsEndpoint, newLoc);

  }

  constructor(private httpClient: HttpClient) { }
}

import {Injectable} from '@angular/core';
import {MYLOC} from '../MYLOC';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocService {
  locsEndpoint = 'http://localhost:4200';

//  contacts = CONTACTS;
  getLoc(): Observable<MYLOC[]> {
    return this.httpClient.get<MYLOC[]>(this.locsEndpoint);
  }

  addLoc(newLoc: MYLOC): any {
    console.log('called service');
    return this.httpClient.post<any>(this.locsEndpoint, newLoc);

  }

  constructor(private httpClient: HttpClient) {
  }
}

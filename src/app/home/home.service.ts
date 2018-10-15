import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Config } from '../utils/config';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient
  ) { }

  getOrganiserLists(): Observable<any>{
    return this._http.get<any>(`${Config.API_SEGMENT_CUSTOMERS}/organizations`);
      /*.pipe(
        catchError(this.handleError('getOrganiserLists', []))
      );*/
  }
}

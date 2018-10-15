import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../utils/config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllStatus(companyKeys): Observable<any>{
    return this._http.post<any>(`${Config.API_SEGMENT_CUSTOMERS}/status`, {companyKeys});
  }
  
  getAllGrouping(companyKey): Observable<any>{
    return this._http.get<any>(`${Config.API_SEGMENT_CUSTOMERS}/companyKey/${companyKey}/groups`);
  }

  getAllProvision(companyKey): Observable<any>{
    return this._http.get<any>(`${Config.API_SEGMENT_CUSTOMERS}/companyKey/${companyKey}/pensionschemes`);
  }
}

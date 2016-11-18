/**
 * Created by mattyyzac on 2016/10/27.
 */
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../shared/rxjs-operators';

import { District, Region } from "../report/modules/area";

@Injectable()
export class AreaService {
  private readonly baseApiUrl = 'http://soweb.kcg.gov.tw/webapi/api/AddrCode';

  constructor(private _http: Http) { }

  getDistricts(countyCode: string): Observable<District[]> {
    var url = `${this.baseApiUrl}/2?p1=${countyCode}`;
    return this._http.get(url)
      //.do(r => console.log(r))
      .map(resp => {
        if (resp.status === 200)
          return resp.json();
      })
      .catch(this.errorHandler);
  }

  getRegions(districtCode: string): Observable<Region[]> {
    var url = `${this.baseApiUrl}/3?p1=${districtCode}`;
    return this._http.get(url)
      //.do(r => console.log(r))
      .map(resp => resp.json())
      .catch(this.errorHandler);
  }

  private errorHandler (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}



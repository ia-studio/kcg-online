/**
 * Created by mattyyzac on 2016/10/4.
 * desc: Obtains the area data / address from geographic position, using google map api
 */
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class GeoAddressService{

  //http://maps.googleapis.com/maps/api/geocode/json?latlng=22.604637500000003,120.2986576&key=yourapikey
  private baseApiUrl: string = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';

  constructor(private _http: Http){
    //
  }

  getAddressResult(lat: number, lng: number): Observable<any>{
    let url = `${this.baseApiUrl}${lat},${lng}`;
    return this._http.get(url).map((resp: Response) => resp.json());
  }
}

/**
 * Created by mattyyzac on 2016/9/6.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class QueryService{

  private _base_api_url = 'http://soweb.kcg.gov.tw/webapi/api/case/'
  constructor(private _http: Http){
    //
  }

  //市長信箱
  getBResult(p1: string, p2: string){
    return this._http.get(this._base_api_url + 'B?p1=' + p1 + '&p2=' + p2)
      .map((resp: Response) => resp.json());
  }

  //人民陳情
  getVResult(p1: string, p2: number, p3: string, p4: string){
    return this._http.get(this._base_api_url + 'V?p1=' + p1 + '&p2=' + p2 + '&p3=' + p3 + '&p4=' + p4)
      .map((resp: Response) => resp.json());
  }
}

/**
 * Created by mattyyzac on 2016/9/6.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class QueryService{

  private _base_api_url = 'https://soweb.kcg.gov.tw/webapi/api/case/';
  private validationCodeUrl = 'https://soweb.kcg.gov.tw/webapi/api/ValidationCode/';//'../../assets/vd.json';

  constructor(private _http: Http){
    //
  }

  //市長信箱
  getBResult(p1: string, p2: string, p3: string){
    return this._http.get(this._base_api_url + 'B?p1=' + p1 + '&p2=' + p2 + '&p3='+ p3)
      .map((resp: Response) => resp.json());
  }

  //人民陳情
  getVResult(p0:string ,p1: string, p2: number, p3: string, p4: string, p5: string){
    return this._http.get(this._base_api_url + p0 + '?p1=' + p1 + '&p2=' + p2 + '&p3=' + p3 + '&p4=' + p4 +'&p5=' +p5)
      .map((resp: Response) => resp.json());
  }

  getValidationCode() : Observable<RecaptchaCode> {
    return this._http.get(this.validationCodeUrl)
               .map((res: Response) => res.json())
               .catch(this.handleError);
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
export interface RecaptchaCode {
    HashCode: string;
    TimeStamp: string;
    ValidationCode: string;
}

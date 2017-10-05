import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';
import { CaseType }       from '../shared/case';

@Injectable()
export class ReportService {
  private baseApiUrl = 'https://soweb.kcg.gov.tw/webapi/api/';//;
  private reportTypesUrl = this.baseApiUrl + 'items/';
  private validationCodeUrl = this.baseApiUrl + 'ValidationCode/'; //'../../assets/vd.json';

  constructor(private http: Http ) {
  }

  getTypes() : Observable<CaseType[]> {
    return this.http.get(this.reportTypesUrl)
               .map((res: Response) => res.json())
               .catch(this.handleError);
  }

  getType(id: string) : Observable<CaseType> {
    return this.http.get(this.reportTypesUrl + id)
               .map((res: Response) => res.json()[0])
               .catch(this.handleError);
  }

  getValidationCode() : Observable<RecaptchaCode> {
    return this.http.get(this.validationCodeUrl)
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

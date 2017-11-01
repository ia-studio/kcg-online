import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Poll} from "./question";
import '../shared/rxjs-operators';

@Injectable()
export class QuestionService {
  questionURL: string;
  constructor( private http: Http) {
    this.questionURL = 'http://ndemo.tw-futaba.com.tw/KCGWebAPI/api/poll/';

  }

  getQuestion(urlQuery:string) : Observable<Poll> {
    return this.http.get(this.questionURL+urlQuery)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }
  postData(formData: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.questionURL, formData, options) // ...using post request
      .map((resp: Response) => resp.json())
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

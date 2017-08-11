import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';

@Injectable()
export class QuestionService {
  questionURL: string;
  constructor( private http: Http) {
    this.questionURL = 'assets/question.json';
  }

  getQuestion() : Observable<any> {
    return this.http.get(this.questionURL)
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

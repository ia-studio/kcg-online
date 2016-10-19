import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';

@Injectable()
export class FeedbackService {
  private pointFeedbackUrl = 'assets/pointFeedback.json';
  private countFeedbackUrl = 'assets/countFeedback.json';
  private effectiveFeedbackUrl = 'assets/effectiveFeedback.json';

  constructor(private http: Http) { }

  getPointFeedback() { 
    return this.http.get(this.pointFeedbackUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }
  getCountFeedback() { 
    return this.http.get(this.countFeedbackUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }
  getEffectiveFeedback() { 
    return this.http.get(this.effectiveFeedbackUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

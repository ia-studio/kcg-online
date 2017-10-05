import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';

@Injectable()
export class FeedbackService {
  public mock = false;
  private pointFeedbackUrl = this.mock ? 'assets/pointFeedback.json' : 'https://soweb.kcg.gov.tw/webapi/api/satPool/1';
  private countFeedbackUrl = this.mock ? 'assets/countFeedback.json' : 'https://soweb.kcg.gov.tw/webapi/api/satPool/2';
  private effectiveFeedbackUrl = this.mock ? 'assets/effectiveFeedback.json' : 'https://soweb.kcg.gov.tw/webapi/api/satPool/3';

  constructor(private http: Http) { }

  getPointFeedback(startDate: string, endDate: string) {
    return this.http.get(this.pointFeedbackUrl + '?qBegDate=' + startDate + '&qEndDate=' + endDate)
               .map(this.extractData)
               .catch(this.handleError);
  }
  getCountFeedback(startDate: string, endDate: string) {
    return this.http.get(this.countFeedbackUrl+ '?qBegDate=' + startDate + '&qEndDate=' + endDate)
               .map(this.extractData)
               .catch(this.handleError);
  }
  getEffectiveFeedback(startDate: string, endDate: string) {
    return this.http.get(this.effectiveFeedbackUrl+ '?qBegDate=' + startDate + '&qEndDate=' + endDate)
               .map(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = error.status == 500 ? "目前無法提供查詢資料。" : error.json().Message ;
    return Observable.throw(errMsg);
  }
}

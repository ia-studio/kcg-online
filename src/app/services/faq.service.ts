import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';

@Injectable()
export class FaqService {
  private categoryUrl = 'http://soweb.kcg.gov.tw/webapi/api/category';
  private faqUrl = 'http://soweb.kcg.gov.tw/webapi/api/faqqry/';

  constructor(private http: Http) { }

  getCategories() : Observable<any> {
    return this.http.get(this.categoryUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }

  getFaqs(q = "", kind = "") : Observable<any> {
    return this.http.get(this.faqUrl + q + '?kind=' + kind)
               .map(this.extractData)
               .catch(this.handleError);
  }

  getReply(organNo: string, seqNo: number) : Observable<any> {
    var key = organNo + '-' + seqNo;
    var flag = sessionStorage.getItem(key) ? 'R' : 'N';
    sessionStorage.setItem(key, new Date().toString());
    return this.http.get(this.faqUrl + organNo + '?seqNo=' + seqNo + '&updFlag=' + flag)
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

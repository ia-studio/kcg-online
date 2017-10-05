import { Injectable }             from '@angular/core';
import { Http, Response }         from '@angular/http';
import { Observable }             from 'rxjs/Observable';
import '../shared/rxjs-operators';
import { Category, Faq, Reply }   from './faq';

@Injectable()
export class FaqService {
  private categoryUrl = 'https://soweb.kcg.gov.tw/webapi/api/category';
  private faqUrl = 'https://soweb.kcg.gov.tw/webapi/api/faqqry/';

  constructor(private http: Http) { }

  getCategories() : Observable<Category[]> {
    return this.http.get(this.categoryUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }

  getFaqs(q = "", kind = "") : Observable<Faq[]> {
    return this.http.get(this.faqUrl + q + '?kind=' + kind)
               .map(this.extractData)
               .catch(this.handleError);
  }

  getReply(organNo: string, seqNo: number) : Observable<Reply> {
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
    return Observable.throw(errMsg);
  }
}

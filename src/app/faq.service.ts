import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FaqService {
  private categoryUrl = 'http://soweb.kcg.gov.tw/webapi/api/category';
  private faqUrl = 'http://soweb.kcg.gov.tw/webapi/api/faqqry/';

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.categoryUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getFaqs(q = "", kind = "") {
    return this.http.get(this.faqUrl + q + '?kind=' + kind)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getReply(organNo: string, seqNo: number, update = false) {
    var flag = update ? 'N' : 'R';
    return this.http.get(this.faqUrl + organNo + '?seqNo=' + seqNo + '&updFlag=' + flag)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';

@Injectable()
export class NewsService {
  private newsListUrl = 'http://soweb.kcg.gov.tw/webapi/api/bulletin';

  constructor(private http: Http) { }

  getNews() { 
    return this.http.get(this.newsListUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }
  getNewsById (id:string){
      return this.http.get(this.newsListUrl+"/"+id)
               .map((res: Response) => res.json()[0])
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

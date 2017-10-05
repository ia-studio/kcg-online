import { Injectable }             from '@angular/core';
import { Http, Response }         from '@angular/http';
import { Observable }             from 'rxjs/Observable';
import { News }                   from './news';
import '../shared/rxjs-operators';

@Injectable()
export class NewsService {
  private newsListUrl = 'https://soweb.kcg.gov.tw/webapi/api/bulletin';

  constructor(private http: Http) { }

  getNews(): Observable<News[]> {
    return this.http.get(this.newsListUrl)
               .map(res => res.json() || [])
               .catch(this.handleError);
  }

  getNewsById(id:string): Observable<News>{
      return this.http.get(this.newsListUrl+"/"+id)
               .map(res => res.json()[0] || {})
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

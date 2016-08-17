import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { CASETYPES }     from './mock-casetypes';
import { Case } from './case';

@Injectable()
export class CaseService {

  private casesUrl = 'app/cases';  // URL to web api

  constructor(private http: Http) { }

  getCases(): Promise<Case> {
    return this.http.get(this.casesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getTypes() {
    return Promise.resolve(CASETYPES);
  }

  getType(id: string) {
    return this.getTypes()
               .then(types => types.find(type => type.id === id));
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

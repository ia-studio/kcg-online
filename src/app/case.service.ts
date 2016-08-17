import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaseService {

  private casesUrl = 'api/cases.json';
  private casetypesUrl = 'api/casetypes.json';

  constructor(private http: Http) { }

  getCases() {
    return this.http.get(this.casesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getTypes() {
    return this.http.get(this.casetypesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getType(id: string) {
    return this.getTypes()
               .then(types => types.find(type => type.id === id))
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

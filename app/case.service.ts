import { Injectable }    from '@angular/core';
import { CASES } from './mock-cases';

@Injectable()
export class CaseService {
  getCases() {
    return  Promise.resolve(CASES);
  }

  getCase(id: string) {
    return this.getCases()
               .then(cases => cases.find(mycase => mycase.id === id));
  }
}


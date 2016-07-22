import { Injectable }    from '@angular/core';
import { CASES } from './mock-cases';

@Injectable()
export class CaseService {
  getCases() {
    return  Promise.resolve(CASES);
  }
}


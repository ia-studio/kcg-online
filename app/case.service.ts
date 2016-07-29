import { Injectable }    from '@angular/core';
import { CASETYPES }     from './mock-casetypes';

@Injectable()
export class CaseService {
  getTypes() {
    return  Promise.resolve(CASETYPES);
  }

  getType(id: string) {
    return this.getTypes()
               .then(types => types.find(type => type.id === id));
  }
}


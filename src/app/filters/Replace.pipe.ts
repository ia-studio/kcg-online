/**
 * Created by matty on 2016/9/9.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replaceNewLine'})
export class ReplaceNewLinePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/\n/g, function(txt) {
      return txt.replace('\n', '<br/>');
    });
  }
}

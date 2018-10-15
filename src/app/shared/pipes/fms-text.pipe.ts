import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';
import * as data from '../../../assets/texts/components.json';

@Pipe({
  name: 'fmsText'
})
export class FmsTextPipe implements PipeTransform {

  transform(value: any): any {
    if(_.has(data, value)) {
      return _.get(data, value);
    }

    return value;
  }

}

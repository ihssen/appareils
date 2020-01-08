import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByState'
})
export class FilterByStatePipe implements PipeTransform {

  transform(values: any, arg): any {
    if (!values) return null;
    if (!arg || arg === 'all') return values;

    return values.filter(function(item){
      if (arg === 'open') {
        return item.status == 'allumé';
      }
      if (arg === 'close') {
        return item.status === 'éteint';
      }
  });
  }

}

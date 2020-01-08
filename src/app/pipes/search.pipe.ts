import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(values: any, args: string): any {
    if(!values)return null;
    if(!args)return values;

    args = args.toLowerCase();

    return values.filter(function(item) {
        return item.name.toLowerCase().includes(args);
    });
  }

}

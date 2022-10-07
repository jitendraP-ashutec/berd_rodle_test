import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value.length) return null;
    if (!args.length) return value;
    args = args?.toLowerCase();
    return value.filter(function (item: any) {
      return JSON.stringify(item.userEmail).toLocaleLowerCase().includes(args);
    })
  }

}

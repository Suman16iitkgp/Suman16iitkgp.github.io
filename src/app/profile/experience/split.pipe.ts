import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   
      if(!value) {
        return;
      }
      return value.split("/");
    }
  

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any) :any{


    // <!-- custom pipe -->

    let currenyYear =new Date().getFullYear();
    let useBirthYear :any= new Date(value).getFullYear();
    let userAge =currenyYear - useBirthYear;
    return userAge;
  }






}

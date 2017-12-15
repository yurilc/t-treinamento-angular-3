import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dificuldade'
})
export class DificuldadePipe implements PipeTransform {

  transform(value: any): any {
    switch(value) {
      case '1':
        return 'Fácil';
      case '2':
        return "Médio";
      case '3':
        return "Difícil";
      default:
        return value;
    }
  }

}

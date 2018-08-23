import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutosSegundos'
})
export class MinutosSegundosPipe implements PipeTransform {

  transform(value:string): string {
  	 let segundos:number = Number(value);
     const minutos: number = Math.floor(segundos / 60);
       return minutos.toString().padStart(2, '0') + ':' + 
           (segundos - minutos * 60).toString().padStart(2, '0');
  }

}

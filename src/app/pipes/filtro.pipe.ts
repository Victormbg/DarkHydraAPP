import { Pipe, PipeTransform } from '@angular/core';
import { Jogos } from './../services/interfaces/jogo.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( Jogos: any, ..._args: any[]): any {
    return null;
  }

}

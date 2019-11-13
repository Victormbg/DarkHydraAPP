import { Pipe, PipeTransform } from "@angular/core";
import { Jogo } from "../models/jogos.model";

@Pipe({
  name: "filtro"
})
export class FiltroPipe implements PipeTransform {
  transform(jogos: Jogo[], texto: string): Jogo[] {
    if (texto.length === 0) {
      return jogos;
    }

    texto = texto.toLocaleLowerCase();

    return jogos.filter(Jogo => {
      return (
        Jogo.tituloJogo.toLocaleLowerCase().includes(texto) ||
        Jogo.tagsJogo.toLocaleLowerCase().includes(texto)
      );
    });
  }
}

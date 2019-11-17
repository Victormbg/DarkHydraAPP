import { Pipe, PipeTransform } from "@angular/core";
import { Perfil } from "../models/perfil";

@Pipe({
  name: "filtroPerfil"
})
export class FiltroPerfilPipe implements PipeTransform {
  transform(perfil: Perfil[], texto: string): Perfil[] {
    if (texto.length === 0) {
      return perfil;
    }

    texto = texto.toLocaleLowerCase();

    return perfil.filter(Perfil => {
      return (
        Perfil.nomePerfil.toLocaleLowerCase().includes(texto) ||
        Perfil.tipoUsuario.toLocaleLowerCase().includes(texto)
      );
    });
  }
}

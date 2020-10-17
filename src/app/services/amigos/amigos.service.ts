import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Amigos } from "../../models/amigos";
import { Perfil } from "../../models/perfil";

@Injectable({
  providedIn: "root"
})
export class AmigosService {
  constructor(public http: HttpClient) {
    console.log("Service Amigos Ativado");
  }

  getAmigos() {
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/seguidor/mutuo?u=96101"
    );
  }

  getPerfilID(idSeguidor) {
    console.log(idSeguidor);
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/p?u=" + idSeguidor
    );
  }

  getAmigoID(idSeguido) {
    console.log(idSeguido);
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/p?u=" + idSeguido
    );
  }

  getComunidade() {
    return this.http.get<Perfil[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/t"
    );
  }

  getSeguidores() {
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/seguidor/seguem?u=96101"
    );
  }

  getSeguindo() {
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/seguidor/sigo?u=96101"
    );
  }

  getPerfil(idSeguido) {
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/p?u=96101"
    );
  }

  getAmigo(idSeguido) {
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/seguidor/mutuo?u=" +
        idSeguido
    );
  }

  getSigo(idSeguido) {
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/seguidor/sigo?u=" +
        idSeguido
    );
  }

  getSeguem(idSeguido) {
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/seguidor/seguem?u=" +
        idSeguido
    );
  }


}

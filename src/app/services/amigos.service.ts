import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Amigos } from "../models/amigos";
import { Perfil } from "../models/perfil"

@Injectable({
  providedIn: 'root'
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

  getAmigoID(idSeguido) {
    return this.http.get<Amigos[]>(
      "https://sleepy-river-60466.herokuapp.com/user/perfil/p?u=" + idSeguido
    );
  }
}

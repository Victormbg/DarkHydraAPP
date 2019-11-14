import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Destaque } from "../models/destaque";

@Injectable({
  providedIn: "root"
})
export class DestaqueService {
  constructor(public http: HttpClient) {
    console.log("Service Destaque Ativado");
  }

  getJogos() {
    return this.http.get<Destaque[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/d"
    );
  }

  getJogoID(idJogo) {
    return this.http.get<Destaque[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/p?id=" + idJogo
    );
  }
}

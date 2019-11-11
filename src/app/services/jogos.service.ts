import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Jogo } from "../models/jogos.model";

@Injectable({
  providedIn: "root"
})
export class JogosService {
  constructor(public http: HttpClient) {
    console.log("Service Jogo Ativado");
  }

  getJogos() {
    return this.http.get<Jogo[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/t"
    );
  }

  getJogoID(idJogo) {
    return this.http.get<Jogo[]>("https://sleepy-river-60466.herokuapp.com/jogos/p?id="+idJogo);
  }
}
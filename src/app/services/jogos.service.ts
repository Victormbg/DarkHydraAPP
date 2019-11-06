import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Jogos } from "../services/interfaces/jogo.interface";
import { Jogo } from "../models/jogos.model";


export interface Jogo {
    name: string;
    idJogo:     number;
    tituloJogo: string;
    descJogo:   string;
    tagsJogo:   string;
    imagem1:    string;
    imagem2:    string;
    imagem3:    string;
    imagem4:    string;
}

@Injectable({
  providedIn: "root"
})
export class JogosService {
  url = "https://sleepy-river-60466.herokuapp.com/jogos/t";
  url1 = "https://sleepy-river-60466.herokuapp.com/jogos/p?id=1";
  url2 = "https://sleepy-river-60466.herokuapp.com/jogos"
  //apiKey = "scadifcabif";

  constructor(public http: HttpClient) {
    console.log("Service Ativado");
  }

  getJogos() {
    return this.http.get<Jogo[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/t"
    );
  }

  getJogos2(idJogo) {
    return this.http.get<Jogo>("https://sleepy-river-60466.herokuapp.com/jogos/p?id="+idJogo);
  }

  listar(): Observable<Jogos[]> {
    return this.http.get<Jogos[]>(this.url);
  }

  // TESTE PARA PEGAR O ID DO JOGO E
  // ABRIR A PAGINA DO JOGO AINDA EM DESENVOLVIMENTO

  getJogoId(idJogo) {
    return this.http.get<Jogo[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/p?id=1"
    );
    //return this.http.get<Jogos[]>(`${this.url1}?idJogo=${idJogo}&apikey=${this.apiKey}`);
  }

  /*

  ! IMPLEMENTANDO O GETID POREM AINDA APRESENTA ERROS
  https://sleepy-river-60466.herokuapp.com/jogos?i=1&apikey=scadifcabif&plot=full

  getJogoId(idJogo) {
    return this.http.get<Jogos[]>(`${this.url}?i=${idJogo}&plot=full`);
  }


  id = null;
  produtos: {};

  constructor(    private route: ActivatedRoute,
    private nav: NavController,
    private produtoSer: ProdutosService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.produtoSer.getContato(this.id).subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });

  }

  */
}

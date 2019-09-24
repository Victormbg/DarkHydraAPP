import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jogos } from '../services/interfaces/jogo.interface'

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  url = 'https://sleepy-river-60466.herokuapp.com/jogos?apikey=scadifcabif'

  constructor(public http: HttpClient) { 
    console.log ("Service Ativado")
  }
  listar():Observable<Jogos[]>{
    return this.http.get<Jogos[]>(this.url);
  }

  getJogoId(idJogo) {
    return this.http.get<Jogos[]>(`${this.url}?i=${idJogo}&plot=full`);
  } 


  /*
  
  
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

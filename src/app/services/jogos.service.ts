import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jogos } from '../services/interfaces/jogo.interface'

export enum SearchType {
  all = '',
  idJogo = 'idJogo',
  tituloJogo = 'tituloJogo',
  descJogo = 'descJogo',
  tagsJogo = 'tagsJogo',
  imagem1 = 'imagem1',
  imagem2 = 'imagem2',
  imagem3 = 'imagem3',
  imagem4 = 'imagem4',
}
@Injectable({
  providedIn: 'root'
})
export class JogosService {
  url = 'https://sleepy-river-60466.herokuapp.com/jogos?apikey=scadifcabif'
  url1 = 'https://sleepy-river-60466.herokuapp.com/jogos'
  apiKey = 'scadifcabif';
  constructor(public http: HttpClient) { 
    console.log ("Service Ativado")
  }
  listar():Observable<Jogos[]>{
    return this.http.get<Jogos[]>(this.url);
  }

  getJogoId(idJogo){
    return this.http.get<Jogos[]>(`${this.url1}?idJogo=${idJogo}&apikey=${this.apiKey}`);
    //return this.http.get<Jogos[]>(`${this.url1}?idJogo=${idJogo}&apikey=${this.apiKey}`);
  } 

  //searchData(title: string, type: SearchType): Observable<any> {
   // return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
    //  map(results => results['Search'])
   // );
  //}

  /*
  
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

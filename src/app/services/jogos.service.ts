import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from '@angular/fire/database';

import { Jogo } from '../models/jogos';
import { Amigos } from './../models/amigos';

import { Comentario } from './../models/comentarios';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  JogoListRef: AngularFireList<any>;
  JogoRef: AngularFireObject<any>;
  constructor(public http: HttpClient, private db: AngularFireDatabase) {
    console.log('Service Jogo Ativado');
  }

  getJogos() {
    this.JogoListRef = this.db.list('/Jogos');
    console.log(this.JogoListRef);
    return this.JogoListRef;
  }

  getJogoID(idJogo) {
    this.JogoListRef = this.db.list('/Jogos' + idJogo);
    console.log(this.JogoListRef);
    return this.JogoListRef;
  }

    getComentarios(idJogo) {
    this.JogoListRef = this.db.list('/Jogos' + idJogo);
    console.log(this.JogoListRef);
    return this.JogoListRef;
  }

  getBiblioteca() {
    this.JogoListRef = this.db.list('/Jogos');
    console.log(this.JogoListRef);
    return this.JogoListRef;
  }

  getJogoD(idSeguido) {
    this.JogoListRef = this.db.list('/Jogos' + idSeguido);
    console.log(this.JogoListRef);
    return this.JogoListRef;
  }
}
/*
  getJogos() {
    return this.http.get<Jogo[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/t"
    );
  }

  getJogoID(idJogo) {
    return this.http.get<Jogo[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/p?id=" + idJogo
    );
  }

  getComentarios(idJogo) {
    return this.http.get<Comentario[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/comentario?id=" + idJogo
    );
  }

  getBiblioteca() {
    return this.http.get<Jogo[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/m?u=96101"
    );
  }

  getJogoD(idSeguido) {
    return this.http.get<Jogo[]>(
      "https://sleepy-river-60466.herokuapp.com/jogos/e?u=" + idSeguido
    );
  }
*/

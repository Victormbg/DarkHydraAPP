import { Amigos } from './../models/amigos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jogo } from '../models/jogos';
import { Comentario } from './../models/comentarios';
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: 'AIzaSyCWgMOkOknFuNi5olqGBnM3hgnfg57WUbA',
    authDomain: 'darkhydra-1572877735000.firebaseapp.com',
    databaseURL: 'https://darkhydra-1572877735000.firebaseio.com',
    projectId: 'darkhydra-1572877735000',
    storageBucket: 'darkhydra-1572877735000.appspot.com',
    messagingSenderId: '725846488547',
    appId: '1:725846488547:web:7c9eea2eb934e0bdd0dcd6'
};
    

var database = firebase.database();

var banco = database.ref('Jogos/')
@Injectable({
  providedIn: "root"
})
export class JogosService {
  constructor(public http: HttpClient) {
    console.log("Service Jogo Ativado");
    
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




getJogos() {
    return 
  }








module.exports.LerNomesJogos = function LerNomesJogos() {
    banco.once("value", function (snapshot) {
        var Nome = [];
        snapshot.forEach(function (childSnapshot) {
            var getNome = childSnapshot.val().Nome_Do_Jogo;
            Nome.push(getNome);
            return this.childSnapshot;
        });
        return Nome;
    });
};
}

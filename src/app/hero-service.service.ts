import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/list_heroes';
import { Observable, of } from 'rxjs'; //Per metodi asincroni
@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }

  //Metodo che restituisce la lista di heroes
  /*getHeroes(): Hero[]
  {
    return HEROES; //Converto l'array di eroi in un un Observable di Hero
  }*/
  //Metodo che restituisce la lista di heroes in maniera asincrona
  getHeroes(): Observable<Hero[]>
  {
    return of(HEROES); //Converto l'array di eroi in un un Observable di Hero
  }
}

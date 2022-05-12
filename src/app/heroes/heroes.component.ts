import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'; //PEr l'oggetto Hero
import { HEROES } from './list_heroes'; //Per la lista HEROES
import { HeroServiceService } from '../hero-service.service'; //Per il service

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //Costruttore a cui passo il servizio per poterlo usare
  constructor(private heroService: HeroServiceService) {}

  //hero: Hero = {id: 1, name: "Hero Pippo"};
  heroes?: Hero[];
  slectedHero?: Hero; //COn ? indico che il tipo è nullable

  //Sempre scatenato durante il caricamento dati
  ngOnInit(): void 
  {
    //Richiamo il servizio per avere la lista di eroi
    //this.heroes = this.heroService.getHeroes();

    //In maniera asincrona
    this.heroService.getHeroes().subscribe(x => this.heroes = x);
  }

  selectHero(hero: Hero): void
  {
    this.slectedHero = hero;
  }
}

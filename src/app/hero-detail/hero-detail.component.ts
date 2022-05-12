import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  @Input() hero?: Hero; //Accetto in ingresso un oggetto di tipo hero

  ngOnInit(): void {
  }

}

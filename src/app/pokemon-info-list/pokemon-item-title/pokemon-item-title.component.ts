import { Component, Input, OnInit } from '@angular/core';
import { PokeData } from './../../types/pokedata.model';

@Component({
  selector: 'app-pokemon-item-title',
  templateUrl: './pokemon-item-title.component.html',
  styleUrls: ['./pokemon-item-title.component.css'],
})
export class PokemonItemTitleComponent implements OnInit {
  @Input() pokemon: PokeData;

  constructor() {}

  ngOnInit(): void {}
}

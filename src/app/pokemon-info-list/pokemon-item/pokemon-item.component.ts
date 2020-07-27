import { Component, OnInit, Input } from '@angular/core';
import { PokeData } from './../../types/pokedata.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: PokeData;
  constructor() {}

  ngOnInit(): void {}
}

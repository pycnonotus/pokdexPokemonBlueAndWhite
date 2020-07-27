import { Injectable } from '@angular/core';

import * as data from './../../data/pokemonData.json';
import { PokeData } from './types/pokedata.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  pokemons: PokeData[];
  pokedexFiltered: PokeData[];
  constructor() {
    this.pokemons = data.info.slice();
    this.pokedexFiltered = this.pokemons.slice();
  }

  filterPokedex(name: string): void {
    name = name.toLowerCase();
    this.pokedexFiltered = this.pokemons.slice(); // copying the array
    this.pokedexFiltered = this.pokedexFiltered.filter(
      (pk) =>
        pk.name.toLowerCase().indexOf(name) >= 0 ||
        pk.hebrewName.indexOf(name) >= 0
    );

    return;
  }


  
}

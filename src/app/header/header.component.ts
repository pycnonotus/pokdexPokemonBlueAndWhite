import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from './../pokemon-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public pokemonData: PokemonDataService) {}

  ngOnInit(): void {}

  filterSearch(name: any): void {
    console.log(name.target.value);
    this.pokemonData.filterPokedex(name.target.value);
  }
}

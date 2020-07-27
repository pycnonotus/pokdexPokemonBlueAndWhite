import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../pokemon-data.service';

@Component({
  selector: 'app-pokemon-info-list',
  templateUrl: './pokemon-info-list.component.html',
  styleUrls: ['./pokemon-info-list.component.css']
})
export class PokemonInfoListComponent implements OnInit {

  constructor( public pokemonData: PokemonDataService ) { }

  ngOnInit(): void {
  }

}

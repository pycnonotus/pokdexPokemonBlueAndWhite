import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonInfoListComponent } from './pokemon-info-list/pokemon-info-list.component';
import { PokemonItemComponent } from './pokemon-info-list/pokemon-item/pokemon-item.component';
import { PokemonItemTitleComponent } from './pokemon-info-list/pokemon-item-title/pokemon-item-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonInfoListComponent,
    PokemonItemComponent,
    PokemonItemTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

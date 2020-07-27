import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonInfoListComponent } from './pokemon-info-list/pokemon-info-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonInfoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

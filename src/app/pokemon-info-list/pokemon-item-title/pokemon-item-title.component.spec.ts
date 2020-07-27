import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonItemTitleComponent } from './pokemon-item-title.component';

describe('PokemonItemTitleComponent', () => {
  let component: PokemonItemTitleComponent;
  let fixture: ComponentFixture<PokemonItemTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonItemTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

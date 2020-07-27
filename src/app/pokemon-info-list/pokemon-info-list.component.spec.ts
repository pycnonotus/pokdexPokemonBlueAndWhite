import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoListComponent } from './pokemon-info-list.component';

describe('PokemonInfoListComponent', () => {
  let component: PokemonInfoListComponent;
  let fixture: ComponentFixture<PokemonInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesGridComponent } from './heroes-grid.component';

describe('HeroesGridComponent', () => {
  let component: HeroesGridComponent;
  let fixture: ComponentFixture<HeroesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

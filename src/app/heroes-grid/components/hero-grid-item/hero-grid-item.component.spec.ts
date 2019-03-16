import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGridItemComponent } from './hero-grid-item.component';

describe('HeroGridItemComponent', () => {
  let component: HeroGridItemComponent;
  let fixture: ComponentFixture<HeroGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

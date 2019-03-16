import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesGridComponent } from './heroes-grid.component';
import { HeroesGridRoutingModule } from './heroes-grid-routing.module';
import { HeroGridItemComponent } from './components/hero-grid-item/hero-grid-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroesGridComponent,
    HeroGridItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesGridRoutingModule,
    SharedModule
  ]
})
export class HeroesGridModule { }

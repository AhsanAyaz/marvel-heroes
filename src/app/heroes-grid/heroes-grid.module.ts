import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesGridComponent } from './heroes-grid.component';
import { HeroesGridRoutingModule } from './heroes-grid-routing.module';

@NgModule({
  declarations: [
    HeroesGridComponent
  ],
  imports: [
    CommonModule,
    HeroesGridRoutingModule
  ]
})
export class HeroesGridModule { }

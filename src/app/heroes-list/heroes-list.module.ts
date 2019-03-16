import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesListRoutingModule } from './heroes-list-routing.module';
import { HeroesListComponent } from './heroes-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroesListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesListRoutingModule,
    SharedModule
  ]
})
export class HeroesListModule { }

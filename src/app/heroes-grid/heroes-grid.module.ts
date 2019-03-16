import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesGridComponent } from './heroes-grid.component';
import { HeroesGridRoutingModule } from './heroes-grid-routing.module';
import { HeroGridItemComponent } from './components/hero-grid-item/hero-grid-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
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
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule
  ]
})
export class HeroesGridModule { }

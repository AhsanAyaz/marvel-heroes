import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesListRoutingModule } from './heroes-list-routing.module';
import { HeroesListComponent } from './heroes-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroesListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesListRoutingModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    SharedModule
  ]
})
export class HeroesListModule { }

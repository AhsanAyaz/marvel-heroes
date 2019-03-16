import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  entryComponents: [
    HeroDetailComponent,
  ],
  exports: [
    HeroDetailComponent,
    MatListModule,
    MatButtonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatIconModule
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class SharedModule { }

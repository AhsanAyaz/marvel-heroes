import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  entryComponents: [
    HeroDetailComponent
  ],
  exports: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

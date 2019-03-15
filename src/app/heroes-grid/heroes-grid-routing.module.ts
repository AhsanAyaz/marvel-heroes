import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesGridComponent } from './heroes-grid.component';

const routes: Routes = [{
  path: '',
  component: HeroesGridComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesGridRoutingModule {}

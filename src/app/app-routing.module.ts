import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesGridComponent } from './heroes-grid/heroes-grid.component';

const routes: Routes = [{
  path: 'grid',
  loadChildren: './heroes-grid/heroes-grid.module#HeroesGridModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play.component';

const playRoutes: Routes = [
  {
    path: 'play',
    component: PlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(playRoutes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }

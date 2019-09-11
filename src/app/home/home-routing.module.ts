import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { CenterComponent } from './center/center.component';

const homeRoutes: Routes = [
  {
    path: '/center',
    component: CenterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

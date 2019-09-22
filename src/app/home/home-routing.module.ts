import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

const homeRoutes: Routes = [
  { path: '', component: ToolBarComponent, outlet: 'toolbar' },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

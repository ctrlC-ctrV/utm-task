import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayRoutingModule } from './play-routing.module';

import { PlayComponent } from './play.component';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    BrowserModule,
    PlayRoutingModule,
  ],
  providers: [],
  bootstrap: [PlayComponent]
})
export class PlayModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PlayModule } from './play/play.module';
import { UserDialogComponent } from './home/user-dialog/user-dialog.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PlayModule
  ],
  providers: [UserDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

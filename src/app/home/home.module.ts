import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatRippleModule
} from '@angular/material';

import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [UserDialogComponent, ToolBarComponent],
  entryComponents: [UserDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatRippleModule,
    HomeRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }

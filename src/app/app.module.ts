import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

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
import { CenterComponent } from './center/center.component';

const modules = [
  BrowserModule,
  AppRoutingModule,
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
];

@NgModule({
  declarations: [AppComponent, ToolBarComponent, DialogExampleComponent, CenterComponent],
  entryComponents: [DialogExampleComponent],
  imports: [...modules],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

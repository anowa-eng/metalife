import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { DataEditorComponent } from './data-editor/data-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomViewComponent,
    DataEditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule
  ],
  exports: [
    AppComponent,
    RoomViewComponent,
    DataEditorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

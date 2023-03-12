import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { GrpcCoreModule } from '@ngx-grpc/core';

@NgModule({
  declarations: [
    AppComponent,
    RoomViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      
    })
  ],
  exports: [
    AppComponent,
    RoomViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild, ElementRef, ComponentRef, AfterViewInit } from '@angular/core';
import { DataEditorComponent } from './data-editor/data-editor.component';

import { RoomViewComponent } from './room-view/room-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DataEditorComponent)
  dataEditorComponent!: DataEditorComponent;
  @ViewChild(RoomViewComponent)
  roomViewComponent!: RoomViewComponent;

  ngAfterViewInit() {
    this.dataEditorComponent.ngModelChangeListener?.subscribe((localUser) => {
      this.roomViewComponent.localUser = this.dataEditorComponent.localUser;
    });
  }
}

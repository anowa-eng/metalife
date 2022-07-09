import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {
  localUser?: any = {};
  @Output() ngModelChangeListener = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onNgModelChange() {
    this.ngModelChangeListener.emit(this.localUser);
  }
}

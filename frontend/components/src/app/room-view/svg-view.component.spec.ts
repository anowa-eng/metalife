import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomViewComponent } from './svg-view.component';

describe('SvgViewComponent', () => {
  let component: RoomViewComponent;
  let fixture: ComponentFixture<RoomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

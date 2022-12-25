import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRadiusService {
  elementRef?: ElementRef;

  constructor() { }

  userRadius() {
    let element = this.elementRef?.nativeElement;

    let dims = element.querySelector('g > circle');
    
  }
}

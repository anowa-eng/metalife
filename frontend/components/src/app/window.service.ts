import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  constructor() {}

  getDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}

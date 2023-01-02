import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderResult]'
})
export class BorderResultDirective implements OnInit {

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid blue');
  }
}
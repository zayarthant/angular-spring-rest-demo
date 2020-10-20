import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appSampleColor]'
})
export class SampleColorDirective implements OnInit{

  @Input()
  myDcolor: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.background = this.myDcolor;
  }

}

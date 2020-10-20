import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMagicColor]'
})
export class MagicColorDirective implements OnInit{

  @Input()
  public defaultColor: string;

  constructor(public element: ElementRef) {

  }

  @HostListener('click')
  onMouseClick(): void{
    this.element.nativeElement.style.backgroundColor = 'black';
  }

  ngOnInit(): void {
    console.log(this.defaultColor);
    this.element.nativeElement.style.backgroundColor = this.defaultColor;
  }

}

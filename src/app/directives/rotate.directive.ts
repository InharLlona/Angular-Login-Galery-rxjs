import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import keyboardjs  from 'keyboardjs/index'

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective {

  argn:number
  args:string

  constructor(private elemento: ElementRef) {
    this.argn = 0
   }

  @HostListener('click',['$event']) onClick(event) {
    if(event.shiftKey==false){
      this.argn = this.argn - 10
      this.args = this.argn.toString()
      this.args = "rotate("+this.argn+"deg)"
      this.elemento.nativeElement.style.transform = this.args
    }else{
      this.argn = this.argn + 10
      this.args = this.argn.toString()
      this.args = "rotate("+this.argn+"deg)"
      this.elemento.nativeElement.style.transform = this.args
    }
  }

  private highlight(color: string) {
    this.elemento.nativeElement.style.backgroundColor = color;
  }
}

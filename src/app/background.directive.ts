import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
@Input()correctanswer:boolean=false;
  constructor(private elRef:ElementRef,private render:Renderer2) { }
  
  @HostListener('click') onanswered(){
    if (this.correctanswer) {
      this.render.setStyle(this.elRef.nativeElement,'background-color','green');
    }
    else{
      this.render.setStyle(this.elRef.nativeElement,'background-color','red');
    }
  }
}

import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
  }
  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // @HostListener('click') toogleOpen() {
  //   this.isOpen = !this.isOpen;
  //   if (this.isOpen) {
  //     this.renderer.addClass(this.elRef.nativeElement, 'open');
  //   }

  //   else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   }
  // }
}
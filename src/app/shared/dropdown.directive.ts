import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  isOpen = false;
  /**first solution
   * this solution will only act on the button clicked then it iwill open and close it
   */
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    const dropdownMenuClass = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(dropdownMenuClass, 'show');
      this.renderer.setStyle(dropdownMenuClass, 'marginTop', '41px');
    } else {
      this.renderer.removeClass(dropdownMenuClass, "show");
    }
  }
  // but will prefer the first solution
  /**this is second solution to close the button outside the dropdown */
  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //   const dropdownMenuClass =
  //     this.elementRef.nativeElement.querySelector('.dropdown-menu');
  //   if (this.elementRef.nativeElement.contains(event?.target)) {
  //     this.isOpen = !this.isOpen;
  //     if (this.isOpen) {
  //       this.renderer.addClass(dropdownMenuClass, 'show');
  //       this.renderer.setStyle(dropdownMenuClass, 'marginTop', '41px');
  //     } else {
  //       this.renderer.removeClass(dropdownMenuClass, 'show');
  //     }
  //   } else {
  //     this.isOpen = false;
  //     this.renderer.removeClass(dropdownMenuClass, 'show');
  //   }
  // }
}

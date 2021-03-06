import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[qubDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleaves') close() {
    this.isOpen = false;
  }
  private isOpen = false;
}

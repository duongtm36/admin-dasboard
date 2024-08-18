import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[ngbDatepicker]'
})
export class NgbDatepickerDirective {
  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

}

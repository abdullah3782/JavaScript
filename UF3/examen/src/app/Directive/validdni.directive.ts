import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValiddni]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValiddniDirective), multi: true }
  ]
})
export class ValiddniDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const validDni = /^\d{8}[A-Za-z]$/.test(control.value);
    return validDni ? null : { 'invalidDni': true };
  }
}

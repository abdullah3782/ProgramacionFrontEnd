import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appValidarNombre]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarNombreDirective, multi: true }]

})
export class ValidarNombreDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    
    let patron = /^[a-zA-Z]{6,}$/; 

    if (!patron.test(control.value)) {
      return { custom: true };
    }

    return null;
  }
}
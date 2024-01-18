import { Directive, Input} from '@angular/core';

//afegir nosaltres:
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[appValidarRepetir]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidarRepetirDirective, multi: true }]
})
export class ValidarRepetirDirective implements Validator {

  @Input('appValidarRepetir') password1!:string;

  constructor() {
   
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

  console.log(control.value);

   let repetirPassword=control.value;
   let passwordInicial= control.root.get(this.password1);
   console.log( passwordInicial); 


    if (passwordInicial!=null && repetirPassword != passwordInicial.value) {
      return { custom: true }; 
    }

    return null;
  }

}

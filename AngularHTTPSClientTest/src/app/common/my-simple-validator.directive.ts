import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appMySimpleValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: MySimpleValidatorDirective, multi : true}]
})
export class MySimpleValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    if (control.value === 'Kyaw Kyaw'){
      return { unvalidName: true};
    }
    return null;
  }

}

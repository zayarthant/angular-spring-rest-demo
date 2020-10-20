import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mailForm: FormGroup;

  constructor() {
    this.mailForm = new FormGroup({
      name : new FormControl(null, [Validators.required, this.ourSimpleNameValidator]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      content: new FormControl( null, Validators.required)
    });
  }

  ourSimpleNameValidator(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    if (control.value === 'Maung Maung'){
      return { unvalidName: true};
    }
    return null;
  }

  ngOnInit(): void {}

  onSummit(): void{
    const context: Context = {
      name: this.mailForm.value.name,
      email: this.mailForm.value.email,
      content: this.mailForm.value.content
    };
    console.log(context);
  }
}

interface Context{
  name: string;
  email: string;
  content: string;
}

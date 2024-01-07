import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private readonly fb: FormBuilder) {
  }

  formulario!: FormGroup;
  submittedData: any;

  ngOnInit(): void {
    this.formulario = this.initForm();
  }

  submit(): void {
    this.submittedData = this.formulario.value;
  }

  initForm(): FormGroup {
    return this.fb.group({
      userName: ["", [Validators.required]],
      pass: ["", [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/)]],
      validPass: ["", [Validators.required]],
      mail: ["", [Validators.required]],
      estadoCivil: ["", [Validators.required]],
      sexo: ["", [Validators.required]],
      informacion: ["", [Validators.required]],
      acceptarCondicions: ["", [Validators.required]],
      edad: ["", [Validators.required]]
    });
  }
}

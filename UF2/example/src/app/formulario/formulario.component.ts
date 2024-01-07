import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private readonly fromBuilder: FormBuilder) {
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
    return this.fromBuilder.group({
      userName: "",
      pass: ["", [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/)]],
      validPass: "",
      mail: ["", [Validators.required]],
      estadoCivil: ["", [Validators.required]],
      sexo: ["", [Validators.required]],
      informacion: ["", [Validators.required]],
      acceptarCondicions: ["", [Validators.required]],
    });
  }
  
}

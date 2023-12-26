
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private readonly fb: FormBuilder) {
  }

  formulari !: FormGroup; //! --> Al utilizar !, significa que estás seguro de que la variable o propiedad tendrá un valor cuando se acceda a ella,
  // y que no se necesita verificar explícitamente si es nula o indefinida.


  ngOnInit(): void {
    this.formulari = this.initForm();
  }

  onSubmit():void {
    console.log(this.formulari.value)
  }




  initForm(): FormGroup {
    return this.fb.group({
      //nomUsuari : ["", [Validators.required, Validators.pattern(/^[a-zA-Z]{6,}$/)]],
      nomUsuari : ["", [Validators.required]],
      contrasenya : ["", [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/)]],
      confirmarContrasenya : ["", [Validators.required]],
      //confirmarContrasenya : ["", [Validators.required, this.matchPassword.bind(this)]],
      //correuElectronic : ["", [Validators.required, Validators.email]],
      correuElectronic : ["", [Validators.required]],
      estatCivil : ["", [Validators.required]],
      sexe : ["", [Validators.required]],
      informacio : ["", [Validators.required]],
      acceptarCondicions : ["", [Validators.required]],
      edad : ["", [Validators.required]]

    })
  }




}

import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from  '@angular/forms';//importaciones obligatorias

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro-component.component.html',
  styleUrls: ['./registro-component.component.css']
})
export class RegistroComponentComponent {
  nom:string="Mariaaa";
  data=new Date();
  
    formContacto=new FormGroup({

      nombre:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      edad:new FormControl('',[
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),
      email:new FormControl('',[
        Validators.required,
        //Validators.pattern('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/')
        Validators.email //<----es una validación muy débil
      ]),
      contrasenya:new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      estatCivil: new FormControl('', [
      Validators.required
      ]),
      sexe: new FormControl('', [
          Validators.required
      ]),
      informacio: new FormGroup({
          videojocs: new FormControl(false),
          accessoris: new FormControl(false),
          novetatsMercat: new FormControl(false)
        }), 
        acceptarCondicions: new FormControl(false, [
          Validators.requiredTrue
          ])

     })
     submit(){
  
     console.log(this.formContacto.value.nombre)
     }
}

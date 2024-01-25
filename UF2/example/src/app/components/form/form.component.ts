import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  //propietats de la classe
  formulari: FormGroup;
  sex: string[];
  status: string[];
  info: string[];
  newUser!: User;
  auxiliarInfo: string[];
  today: Date;

  constructor() {
    this.formulari = new FormGroup({
      nomUsuari: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[a-zA-Z]{6,}$')
      ]),
      contrasenya: new FormControl('', [
        Validators.required,
        //(?=.*[a-zA-Z]): Asegura que haya al menos una letra en la cadena , si queremos que sean 2 letra tenemos que poner otro .*[a-zA-Z] || (?=.*\d): Asegura que haya al menos un número en la cadena, si queremos que sean 2 numeros tenemos que poner otro .*\d
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/),
      ]),
      confirmarContrasenya: new FormControl('', [Validators.required]),
      correuElectronic: new FormControl('', [Validators.required]),
      estatCivil: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      informacio: new FormControl(''),
      acceptarCondicions: new FormControl('', [Validators.requiredTrue]),
    });

    this.sex = ['Home', 'Dona', 'Altres'];
    this.status = ['Casat/da', 'Solter/a', 'Divorciat/da'];
    this.info = ['Videojocs', 'Accessoris', 'Novetats del mercat'];
    this.auxiliarInfo = [];
    this.today = new Date();
  }

  enviament(): void {
    this.formulari.value.informacio = this.auxiliarInfo.toString();

    this.newUser = new User(
      this.formulari.value.nomUsuari,
      this.formulari.value.contrasenya,
      this.formulari.value.correuElectronic,
      this.formulari.value.estatCivil,
      this.formulari.value.sexe,
      this.formulari.value.informacio,
      this.formulari.value.acceptarCondicions
    );

    console.log(this.newUser);
    localStorage.setItem('firstName', 'Sara');
  }

  recollint(item: string): void {
    if (this.auxiliarInfo.indexOf(item) == -1) {
      this.auxiliarInfo.push(item);
    } else {
      this.auxiliarInfo.splice(this.auxiliarInfo.indexOf(item), 1);
    }

    console.log(this.auxiliarInfo);
  }
}

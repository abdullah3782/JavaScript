import { Component } from '@angular/core';

@Component({
  selector: 'app-contenedor-cronometro',
  templateUrl: './contenedor-cronometro.component.html',
  styleUrls: ['./contenedor-cronometro.component.css']
})
export class ContenedorCronometroComponent {
  mensaje:string;

  constructor(){
    this.mensaje="";
  }
  actualizar(t: number):void {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}

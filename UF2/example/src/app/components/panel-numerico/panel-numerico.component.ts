import { Component, ViewChild } from '@angular/core';

//necesito importar toda la componente hija
import { SelectorNumericoComponent } from '../selector-numerico/selector-numerico.component';

@Component({
  selector: 'app-panel-numerico',
  templateUrl: './panel-numerico.component.html',
  styleUrls: ['./panel-numerico.component.css']
})
export class PanelNumericoComponent {
//llamo a la componente que hace de hija: SelectorNumerico
@ViewChild('selector1') selector1!: SelectorNumericoComponent
@ViewChild('selector2') selector2!: SelectorNumericoComponent

//metodos de la clase padre que llaman a metodos de la clase hija
fijarSelector1(valor:number) {
  this.selector1.fijar(valor);//llamo al metodo fijar en la compo. selector numerico
}

fijarSelector2(valor:number) {
  this.selector2.fijar(valor);//llamo al metodo fijar en la compo. selector numerico
}

}

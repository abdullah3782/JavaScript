import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  segundo=0;//atribut normal

  @Input() inicio: number=0; //atribut que farà de paràmetre al costat del selector (app-cronometro)
  @Output() multiplo10 = new EventEmitter();//mètode que fa d'esdeveniment personalitzat

  constructor() { }

  ngOnInit() {
    this.segundo = this.inicio;
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0)  this.multiplo10.emit(this.segundo);//enviem un valor cada 10 segons
    }, 1000);
  }
}

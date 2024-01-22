import { Component, OnInit } from '@angular/core';
import { CompraService } from '../merchandising/compra.service';
import { Producte } from '../merchandising/producte';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent implements OnInit {
  compra: Producte[] = [];

  constructor(private compraService: CompraService) {}

  ngOnInit(): void {
    this.compra = this.compraService.getCompra();
  }
}

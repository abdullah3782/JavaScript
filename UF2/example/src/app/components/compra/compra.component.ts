import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Producte } from 'src/app/model/Producte';
import { MerchandisingComponent } from '../merchandising/merchandising.component';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent {
  carrito: Producte[] = [];
  precio: number = 0;
  mensaje!: string;
  constructor(private cookieService: CookieService) {
    if (this.cookieService.check('carrito')) {
      this.carrito = JSON.parse(this.cookieService.get('carrito'));
    }
    this.calcularPrecio();
  }

  calcularPrecio() {
    this.carrito.forEach((producto) => {
      this.precio += producto.preu * producto.quantitat;
    });
  }

  confirmarCompra() {
    this.mensaje = 'La teva compra a tingut éxit';
  }

  cancelarCompra() {
    this.cookieService.delete('carrito');
    window.location.reload();
  }
}

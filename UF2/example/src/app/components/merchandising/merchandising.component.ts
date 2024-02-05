import { Component, EventEmitter, Output } from '@angular/core';
import { Producte } from 'src/app/model/Producte';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.css'],
})
export class MerchandisingComponent {
  carrito: Producte[] = [];

  productoAAnyadir!: Producte[];

  //añadimos los 4 productos
  productos: Producte[] = [

    new Producte('producto1.jpg', 'Producto1', 'Descripción1', 10, 2,0),
    new Producte('producto2.jpg', 'Producto2', 'Descripción2', 10, 3,0),
    new Producte('producto3.jpg', 'Producto3', 'Descripción3', 10, 4,0),
    new Producte('producto4.jpg', 'Producto4', 'Descripción4', 10, 5,0),
  ];
//constructor
constructor(private cookieService: CookieService) {
  if (this.cookieService.check('carrito')) {
    this.carrito = JSON.parse(this.cookieService.get('carrito'));
  }
}
//añadimos el producto
afegirProducte(producto: Producte) {
  if (this.carrito.some((p) => p.nomProducte == producto.nomProducte)) {
    const totalProd = this.carrito.map((prod) => {
      if (prod.nomProducte == producto.nomProducte) {
        if (prod.disponibilitat != prod.quantitat) {
          prod.quantitat++;
        }
      }
      return prod;
    });
  } else {
    producto.quantitat = 1;
    this.carrito.push(producto);
  }
  this.cookieService.set('cesta', JSON.stringify(this.carrito));
}
}

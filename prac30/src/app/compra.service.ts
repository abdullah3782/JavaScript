// compra.service.ts
import { Injectable } from '@angular/core';
import { Producte } from './producte';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  private compra: Producte[] = [];

  getCompra(): Producte[] {
    return this.compra;
  }

  afegirProducte(producte: Producte): void {
    const index = this.compra.findIndex((p) => p.nomProducte === producte.nomProducte);

    if (index === -1) {
      producte.quantitatComprada = 1;
      this.compra.push(producte);
    } else {
      this.compra[index].quantitatComprada += 1;
    }

    this.actualitzarCookie();
  }

  private actualitzarCookie(): void {

  }
}


Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  
  login!:string | null;
  ngOnInit(): void {
this.login = localStorage.getItem('Login');
if (this.login) {



}



  }
}
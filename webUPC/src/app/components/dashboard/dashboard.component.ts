import { Component } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private db:DbService){}
  getUsers() {
    this.db.getEvents().subscribe(
    (result) => {
    // Accedemos a la posicion que queramos de el array de objetos i mostramos el valor
    //result.resultats[posicion].nombreDeLaColumnaQueHayEnLaBaseDeDatos
    const usuario = result.resultats.username;

    console.log(result.resultats);
    }
    );
    }
}

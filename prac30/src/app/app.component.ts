import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    // Verificar si localStorage está vacío
    if (localStorage.getItem("Login")) {
      console.log('localStorage está vacío');
    } else {
      console.log('localStorage NO está vacío');
    }
  }
}

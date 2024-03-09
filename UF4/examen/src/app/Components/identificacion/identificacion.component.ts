import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})

export class IdentificacionComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  // Este método inicializa el formulario de inicio de sesión .
  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]]
    });
  }

  // Este método se activará cuando le de al boton click
  onSubmit() {
    // Verifico si el formulario es valido
    if (this.loginForm.valid) {
      // Recojo los valores del formulario
      const { email, password } = this.loginForm.value;

      //Aqui hago la validacion de las credenciales.
      const isAuthenticated = this.authService.validateUser(email, password);

      // Si las credenciales son válidas, guardo el correo electrónico en el almacenamiento local y redirijo al usuario al menu
      if (isAuthenticated) {
        localStorage.setItem('user', email);
        this.router.navigate(['/menu']);
      } else {
      }
    }
  }

  // Con este método hago que el usuario al volver a la página anterior.
  onBack() {
    this.router.navigate(['/']);
  }
}

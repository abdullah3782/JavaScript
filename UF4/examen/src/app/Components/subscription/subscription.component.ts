import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  // inicializo el formulario de suscripcion con campos vacioss y validaciones
  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      confirmPassword: ['', Validators.required]
    }, {
      // validacion personalizada para verificar que las contraseñas coincidan
      validators: this.passwordMatchValidator
    });
  }

  // Esta función valida si las contraseñas coinciden
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  // Activo este método cuando se envía el formulario de suscripción
  onSubmit() {
    // Verifico si el formulario es válido antes de procesar los datos
    if (this.loginForm.valid) {
      // Recojo los valores del formulario (correo electrónico y contraseña)
      const { email, password } = this.loginForm.value;

      // Utilizo el servicio de autenticación para registrar al usuario
      this.authService.registerUser(email, password).subscribe({
        // Si el usuario se registra correctamente, redirijo al usuario al menú
        next: (response) => {
          console.log('Usuario registrado', response);
          this.router.navigate(['/menu']);
        },
        // Si hay un error durante el registro, lo muestro en la consola
        error: (error) => {
          console.error('Error de registro', error);
        }
      });
    }
  }

  // Con este método hago que el usuario vuelva a la página anterior
  onBack() {
    this.router.navigate(['/']);
  }
}

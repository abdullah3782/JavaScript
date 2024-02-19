import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly users = [
    { email: 'user@example.com', password: 'Y2643782S' },
  ];

  constructor() { }

  validateUser(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }

  validDni(dni: string): boolean {

    return dni.length === 9 && /^\d+$/.test(dni);
  }

}

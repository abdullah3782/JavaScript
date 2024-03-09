import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly users = [
    { email: 'user@example.com', password: 'Y2643782S' },
    { email: 'user1@example.com', password: '12345678Z' },
    { email: 'user2@example.com', password: '00000000T' },
    { email: 'user3@example.com', password: '35175435V' },
    { email: 'user4@example.com', password: '50768918Y' },

  ];

  constructor(private http: HttpClient) { }

  validateUser(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }

  validDni(dni: string): boolean {
    return dni.length === 9 && /^\d+$/.test(dni);
  }

  registerUser(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post('http://localhost:3000/subscription', body);
  }
isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}


}

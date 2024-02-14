import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectarService {

  constructor(private http: HttpClient) { }

  // Método para obtener un post específico
  getPosts(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/posts/1', {responseType: 'json'});
  }

  // Método para obtener usuarios
  getUsers(): Observable<any> {
      return this.http.get('https://reqres.in/api/users?page=2');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbService {

URL = "http://127.0.0.1:8000/"

constructor(private http: HttpClient) { }

//mètodes que retornen valors que venen d'una API
getPosts(): Observable <any> {
return this.http.get('http://localhost:3000/app/users');
}

getEvents(): Observable <any> {
return this.http.get('http://localhost:3000/app/events');

}
getTournaments(): Observable <any> {
  return this.http.get('http://localhost:3000/app/tournaments');

  }
}



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConectarService {

  constructor(private http:HttpClient) { }


  getPosts():Observable < any{
return.this.http.get('https://codingpotions.com/angular-servicios-llamadas-http');

  }
}

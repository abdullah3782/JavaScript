import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() childMessage!:string;
messageChild="Hello child"
  message!: string;
}

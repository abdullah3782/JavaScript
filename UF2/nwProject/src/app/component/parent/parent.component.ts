import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
// import {}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
parentMessage = "MessageParent"


@ViewChild(ChildComponent) child!:ChildComponent;
color: string ="blue"
messageParent: string=" Holi " 

ngAfterViewInit(): void {

this.messageParent=this.child.message;

}

}

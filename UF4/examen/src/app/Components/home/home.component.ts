import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  // cookiesAccepted: boolean = false;

  // constructor(private cookieService: CookieService) {}

  // ngOnInit(): void {
  //   this.cookiesAccepted = this.cookieService.check('hermes');
  // }


  // acceptCookies(): void {
  //    this.cookieService.set('hermes', 'yes');
  //   this.cookiesAccepted = true;
  // }

  // rejectCookies(): void {
  //   this.cookiesAccepted = true;
  // }
}

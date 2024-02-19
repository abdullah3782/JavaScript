import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { IdentificacionComponent } from './Components/identificacion/identificacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValiddniDirective } from './Directive/validdni.directive';
import { MenuComponent } from './Components/menu/menu.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { GeneralComponent } from './Components/general/general.component';
import { ColeccionsComponent } from './Components/coleccions/coleccions.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionComponent,
    IdentificacionComponent,
    ValiddniDirective,
    MenuComponent,
    PagenotfoundComponent,
    GeneralComponent,
    ColeccionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

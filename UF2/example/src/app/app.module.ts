import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//cargados automaticamente
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';


//cargar a mano
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MayoredadDirective } from './directives/mayoredad.directive';



@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    MayoredadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

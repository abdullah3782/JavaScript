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
import { RegistroComponentComponent } from './componentes/registro-component/registro-component.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
//FormsModule se usa para Template Forms --> [(ngModel)]


@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    MayoredadDirective,
    RegistroComponentComponent,
    PageNotFoundComponent,
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JuegoComponent } from './components/juego/juego.component';
import { DadoComponent } from './components/dado/dado.component';
import { PanelNumericoComponent } from './components/panel-numerico/panel-numerico.component';
import { SelectorNumericoComponent } from './components/selector-numerico/selector-numerico.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { ContenedorCronometroComponent } from './components/contenedor-cronometro/contenedor-cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    DadoComponent,
    PanelNumericoComponent,
    SelectorNumericoComponent,
    CronometroComponent,
    ContenedorCronometroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

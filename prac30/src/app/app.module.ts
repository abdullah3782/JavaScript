import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipComponent } from './components/equip/equip.component';
import { QuiensomComponent } from './components/quiensom/quiensom.component';
import { MerchandisingComponent } from './components/merchandising/merchandising.component';
import { CompraComponent } from './components/compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipComponent,
    QuiensomComponent,
    MerchandisingComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

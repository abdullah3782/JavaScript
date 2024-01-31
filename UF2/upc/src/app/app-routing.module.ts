import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [


  {path: 'aboutus', component: AboutusComponent}, // Componente de formulario
  {path: 'home', component: HomeComponent}, // Componente de formulario
  {path: 'menu', component: MenuComponent}, // Componente de formulario
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

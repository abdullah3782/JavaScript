import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/Components/home/home.component';
import { SubscriptionComponent } from '../app/Components/subscription/subscription.component';
import { IdentificacionComponent } from '../app/Components/identificacion/identificacion.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { GeneralComponent } from './Components/general/general.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'identificacion', component: IdentificacionComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'general', component: GeneralComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

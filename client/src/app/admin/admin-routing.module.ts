//moduli
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//komponente
import { PanelComponent } from './panel/panel.component';
//servisi
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { path: 'panel', component:PanelComponent , canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

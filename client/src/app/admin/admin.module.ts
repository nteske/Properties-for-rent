//modeli
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
//komponenete
import { PanelComponent } from './panel/panel.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminPropertiesComponent } from './admin-properties/admin-properties.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [PanelComponent, AdminUsersComponent, AdminPropertiesComponent]
})
export class AdminModule { }

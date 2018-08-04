//moduli
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { UsersRoutingModule } from './users-routing.module';
//komponente
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PasswordComponent } from './password/password.component';
import { MyPropertyComponent } from './my-property/my-property.component';


@NgModule({
  imports: [
    CommonModule,
    StarRatingModule.forRoot(),
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, SettingsComponent, PasswordComponent, MyPropertyComponent]
})
export class UsersModule { }

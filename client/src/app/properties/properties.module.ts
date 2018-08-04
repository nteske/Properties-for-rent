///moduli
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';
import { PropertiesRoutingModule } from './properties-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

//komponente
import { ViewPropertyComponent } from './view-property/view-property.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';

@NgModule({
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    StarRatingModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [AddPropertyComponent, ViewPropertyComponent, PropertyFormComponent, EditPropertyComponent]
})
export class PropertiesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { AdminModule } from './admin/admin.module';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => PagesModule  },
  { path: 'admin', loadChildren:() => AdminModule },
  { path: 'users', loadChildren: () => UsersModule  },
  { path: 'properties', loadChildren:() => PropertiesModule },
  { path: 'not-found', component:NotFoundComponent },
  { path: '**', redirectTo:'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

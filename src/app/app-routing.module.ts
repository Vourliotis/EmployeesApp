import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { AttributesComponent } from './features/employees/attributes/attributes.component';
import { CreateAttributeComponent } from './features/employees/create-attribute/create-attribute.component';
import { CreateEmployeeComponent } from './features/employees/create-employee/create-employee.component';
import { EditAttributeComponent } from './features/employees/edit-attribute/edit-attribute.component';
import { EditEmployeeComponent } from './features/employees/edit-employee/edit-employee.component';
import { ListComponent } from './features/employees/list/list.component';
import { MapComponent } from './features/employees/map/map.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'attributes', component: AttributesComponent },
  { path: 'attributes/create', component: CreateAttributeComponent },
  { path: 'attributes/edit/:id', component: EditAttributeComponent },
  { path: 'employees', component: ListComponent },
  { path: 'employees/create', component: CreateEmployeeComponent },
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
  { path: 'map', component: MapComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

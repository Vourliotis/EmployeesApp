import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { AttributesComponent } from './features/employees/attributes/attributes.component';
import { CreateEmployeeComponent } from './features/employees/create-employee/create-employee.component';
import { EditEmployeeComponent } from './features/employees/edit-employee/edit-employee.component';
import { ListComponent } from './features/employees/list/list.component';
import { MapComponent } from './features/employees/map/map.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'attributes', component: AttributesComponent },
  {
    path: 'employees',
    component: ListComponent,
    // children: [{ path: 'create-employee', component: CreateEmployeeComponent }],
  },
  { path: 'employees/create-employee', component: CreateEmployeeComponent },
  { path: 'employees/edit-employee/:id', component: EditEmployeeComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

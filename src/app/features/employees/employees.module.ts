import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesComponent } from './attributes/attributes.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AttributesComponent,
    ListComponent,
    MapComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class EmployeesModule {}

import { Injectable } from '@angular/core';
import employees from '../../../data/employees.json';
import attributes from '../../../data/attributes.json';
import employeeAttributes from '../../../data/employeeAttributes.json';
import { Employee } from '../models/employee.model';
import { Attribute } from '../models/attribute.model';
import { EmployeeAttribute } from '../models/employee-attribute.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  listOfEmployees: Employee[] = employees;
  listOfAttributes: Attribute[] = attributes;
  listOfEmployeeAttrivutes: EmployeeAttribute[] = employeeAttributes;

  constructor() {}

  getEmployees(): Employee[] {
    return this.listOfEmployees;
  }

  getAttributes(): Attribute[] {
    return this.listOfAttributes;
  }

  getEmployeeAttributes(): EmployeeAttribute[] {
    return this.listOfEmployeeAttrivutes;
  }
}

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
  listOfEmployeeAttributes: EmployeeAttribute[] = employeeAttributes;
  lastId: number = Number(
    this.listOfEmployees[this.listOfEmployees.length - 1].id
  );

  constructor() {}

  getEmployees(): Employee[] {
    return this.listOfEmployees;
  }

  getAttributes(): Attribute[] {
    return this.listOfAttributes;
  }

  getEmployeeAttributes(): EmployeeAttribute[] {
    return this.listOfEmployeeAttributes;
  }

  postEmployee(employee: Employee) {
    this.lastId += 1;
    employee.id = this.lastId.toString();
    this.listOfEmployees.push(employee);
    console.log(this.lastId);
  }

  getEmployeeById(id: String | null): Employee {
    var result = this.listOfEmployees.find((obj) => {
      return obj.id === id;
    });
    return result!;
  }

  getAttributeById(id: String | null): Attribute {
    var result = this.listOfAttributes.find((obj) => {
      return obj.id === id;
    });
    return result!;
  }

  updateEmployee(id: String, employee: Employee) {
    var resultIndex = this.listOfEmployees.findIndex((obj) => {
      return obj.id === id;
    });
    this.listOfEmployees[resultIndex].name = employee.name;
    this.listOfEmployees[resultIndex].address = employee.address;
    this.listOfEmployees[resultIndex].hasCar = employee.hasCar;
    this.listOfEmployees[resultIndex].birthday = employee.birthday;
  }

  getJoinedList(): [] {
    return [];
  }
}

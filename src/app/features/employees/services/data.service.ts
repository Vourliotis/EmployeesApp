import { Injectable } from '@angular/core';
import employees from '../../../data/employees.json';
import attributes from '../../../data/attributes.json';
import { Employee } from '../models/employee.model';
import { Attribute } from '../models/attribute.model';
import { EmployeeAttribute } from '../models/employee-attribute.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  listOfEmployees: Employee[] = employees;
  listOfAttributes: Attribute[] = attributes;
  lastId: number = Number(
    this.listOfEmployees[this.listOfEmployees.length - 1].id
  );

  constructor() {}

  getEmployees(): Employee[] {
    return this.listOfEmployees;
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

  updateEmployee(id: String, employee: Employee) {
    var resultIndex = this.listOfEmployees.findIndex((obj) => {
      return obj.id === id;
    });
    this.listOfEmployees[resultIndex].name = employee.name;
    this.listOfEmployees[resultIndex].address = employee.address;
    this.listOfEmployees[resultIndex].hasCar = employee.hasCar;
    this.listOfEmployees[resultIndex].birthday = employee.birthday;
  }

  getEmployeeAttributes(): EmployeeAttribute[] {
    let listOfEmployeeAttributes: EmployeeAttribute[] = [];
    this.listOfEmployees.map((employee, idx) => {
      employee.attributes.map((attribute) => {
        listOfEmployeeAttributes.push({
          ...attribute,
          employeeName: employee.name,
          employeeId: employee.id,
        });
        return;
      });
      return;
    });
    return listOfEmployeeAttributes;
  }
}

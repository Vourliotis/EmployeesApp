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
  listOfEmployees: Employee[];
  listOfAttributes: Attribute[];
  lastId: number;

  constructor() {
    this.listOfEmployees = employees;
    this.listOfAttributes = attributes;
    this.lastId = Number(
      this.listOfEmployees[this.listOfEmployees.length - 1].id
    );
  }

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

  getEmployeeAttributeById(attId: String): EmployeeAttribute {
    let listOfEmployeeAttributes = this.getEmployeeAttributes();
    let result = listOfEmployeeAttributes.find((obj) => {
      return obj.id === attId;
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

  updateAttribute(empId: String, attId: String, attribute: Attribute) {
    this.listOfEmployees = this.listOfEmployees.map((emp) => {
      if (emp.id === empId) {
        emp.attributes.forEach((att) => {
          if (att.id === attId) {
            att.name = attribute.name;
            att.value = attribute.value;
          }
          return att;
        });
      }
      return emp;
    });
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

  deteleEmployee(id: String): null {
    this.listOfEmployees = this.listOfEmployees.filter(function (obj) {
      return obj.id !== id;
    });

    return null;
  }

  deteleAttribute(id: String) {
    this.listOfEmployees = this.listOfEmployees.filter(function (obj) {
      obj.attributes = obj.attributes.filter((att) => {
        return att.id !== id;
      });
      return obj;
    });
  }
}

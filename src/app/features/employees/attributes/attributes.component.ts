import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeAttribute } from '../models/employee-attribute.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
  host: {
    '[class.w-50]': 'true',
  },
})
export class AttributesComponent implements OnInit {
  listOfEmployees: Employee[];
  listOfAttributes: EmployeeAttribute[] = [];

  constructor(private dataService: DataService) {
    this.listOfEmployees = this.dataService.getEmployees();
    this.listOfAttributes = this.dataService.getEmployeeAttributes();
  }

  ngOnInit(): void {}
}

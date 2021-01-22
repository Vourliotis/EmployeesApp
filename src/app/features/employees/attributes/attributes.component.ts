import { Component, OnInit } from '@angular/core';
import { Attribute } from '../models/attribute.model';
import { EmployeeAttribute } from '../models/employee-attribute.model';
import { Employee } from '../models/employee.model';
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
  listOfAttributes: Attribute[];
  listOfEmployees: Employee[];
  listOfEmployeeAttributes: EmployeeAttribute[];
  combinedList: [];

  constructor(private dataService: DataService) {
    this.listOfAttributes = this.dataService.getAttributes();
    this.listOfEmployees = this.dataService.getEmployees();
    this.listOfEmployeeAttributes = this.dataService.getEmployeeAttributes();
    this.combinedList = this.dataService.getJoinedList();
    console.log(this.listOfAttributes);
  }

  ngOnInit(): void {}
}

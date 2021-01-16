import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import employees from '../../../data/employees.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listOfEmployees: Employee[] = employees;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: {
    '[class.w-50]': 'true',
  },
})
export class ListComponent implements OnInit {
  listOfEmployees: Employee[];

  constructor(private dataService: DataService) {
    this.listOfEmployees = this.dataService.getEmployees();
  }

  ngOnInit(): void {}
}

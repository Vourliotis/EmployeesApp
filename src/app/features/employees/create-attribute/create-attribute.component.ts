import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeAttribute } from '../models/employee-attribute.model';
import { Employee } from '../models/employee.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-attribute',
  templateUrl: './create-attribute.component.html',
  styleUrls: ['./create-attribute.component.scss'],
  host: {
    '[class.w-75]': 'true',
  },
})
export class CreateAttributeComponent implements OnInit {
  createForm: FormGroup;
  listOfEmployees: Employee[];

  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private router: Router
  ) {
    this.listOfEmployees = data.getEmployees();
    this.createForm = this.fb.group({
      employee: [null, Validators.required],
      name: [null, Validators.required],
      value: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  formSubmit(): void {
    if (!this.createForm.valid) {
      console.log('Form invalid');
    } else {
      let employeeAttribute: EmployeeAttribute = {
        id: '',
        name: this.createForm.value.name,
        value: this.createForm.value.value,
        employeeId: this.createForm.value.employee.id,
        employeeName: this.createForm.value.employee.name,
      };

      this.data.postAttribute(employeeAttribute);
      this.router.navigate(['attributes']);
    }
  }
}

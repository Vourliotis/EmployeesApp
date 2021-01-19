import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      name: [null, Validators.required],
      birthday: [null, Validators.required],
      hasCar: [],
      address: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  formSubmit(): void {
    if (!this.createForm.valid) {
      console.log('Form invalid');
    } else {
      this.data.postEmployee(this.createForm.value);
      console.log(this.data.getEmployees());
      this.router.navigate(['employees']);
      //Add employee with postEmployee()
    }
  }
}

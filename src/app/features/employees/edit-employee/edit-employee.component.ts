import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  editForm: FormGroup;
  routeId: String | null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private data: DataService
  ) {
    this.editForm = this.fb.group({
      name: [null, Validators.required],
      birthday: [null, Validators.required],
      hasCar: [],
      address: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.patchDataToForm();
  }

  patchDataToForm() {
    this.routeId = this.route.snapshot.paramMap.get('id');
    this.data.getEmployeeById(this.routeId);
    this.editForm.patchValue(this.data.getEmployeeById(this.routeId));
  }

  formSubmit(): void {}
}

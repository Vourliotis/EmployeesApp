import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
  host: {
    '[class.w-75]': 'true',
  },
})
export class EditEmployeeComponent implements OnInit {
  editForm: FormGroup;
  routeId: String | null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router
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

  formSubmit(): void {
    this.data.updateEmployee(this.routeId!, this.editForm.value);
    this.router.navigate(['employees']);
  }
}

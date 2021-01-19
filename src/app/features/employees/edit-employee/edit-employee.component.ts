import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  editForm: FormGroup;
  routeId: string | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.editForm = this.fb.group({
      name: [null, Validators.required],
      birthday: [null, Validators.required],
      hasCar: [null, Validators.required],
      address: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.patchDataToForm();
  }

  patchDataToForm() {
    this.routeId = this.route.snapshot.paramMap.get('id');
  }

  formSubmit(): void {}
}

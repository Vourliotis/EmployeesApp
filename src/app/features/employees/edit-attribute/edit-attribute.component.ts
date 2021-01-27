import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-attribute',
  templateUrl: './edit-attribute.component.html',
  styleUrls: ['./edit-attribute.component.scss'],
  host: {
    '[class.w-75]': 'true',
  },
})
export class EditAttributeComponent implements OnInit {
  editForm: FormGroup;
  employeeId: String | null;
  attributeId: String | null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      employeeName: [null],
      name: [null, Validators.required],
      value: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.patchDataToForm();
    this.editForm.controls['employeeName'].disable();
  }

  patchDataToForm() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.attributeId = this.route.snapshot.paramMap.get('id2');
    this.editForm.patchValue(
      this.data.getEmployeeAttributeById(this.attributeId!)
    );
  }

  formSubmit(): void {
    this.data.updateAttribute(
      this.employeeId!,
      this.attributeId!,
      this.editForm.value
    );
    this.router.navigate(['attributes']);
  }
}

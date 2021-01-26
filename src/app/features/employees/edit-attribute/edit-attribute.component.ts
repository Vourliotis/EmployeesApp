import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-attribute',
  templateUrl: './edit-attribute.component.html',
  styleUrls: ['./edit-attribute.component.scss'],
  host: {
    '[class.w-75]': 'true',
  },
})
export class EditAttributeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

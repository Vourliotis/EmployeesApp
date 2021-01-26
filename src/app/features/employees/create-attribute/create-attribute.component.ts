import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-attribute',
  templateUrl: './create-attribute.component.html',
  styleUrls: ['./create-attribute.component.scss'],
  host: {
    '[class.w-75]': 'true',
  },
})
export class CreateAttributeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

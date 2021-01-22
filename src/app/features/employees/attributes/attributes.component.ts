import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
  host: {
    '[class.w-50]': 'true',
  },
})
export class AttributesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

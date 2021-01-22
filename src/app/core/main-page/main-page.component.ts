import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  host: {
    '[class.w-100]': 'true',
  },
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  host: {
    '[class.w-50]': 'true',
  },
})
export class MapComponent implements OnInit {
  lat = 45.899977;
  lng = 6.172652;
  zoom = 13;
  style = 'mapbox://styles/mapbox/streets-v11';
  constructor() {}

  ngOnInit(): void {
    const map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });

    map.addControl(new mapboxgl.NavigationControl());
  }
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
import { Employee } from '../models/employee.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  host: {
    '[class.w-50]': 'true',
  },
})
export class MapComponent implements OnInit, AfterViewInit {
  listOfEmployees: Employee[];
  map: mapboxgl.Map;
  lat = 37.9838;
  lng = 23.7275;
  zoom = 12;
  style = 'mapbox://styles/mapbox/streets-v11';
  constructor(private dataService: DataService) {
    this.listOfEmployees = dataService.getEmployees();
  }

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(
      // @ts-ignore
      new MapboxDirections({
        accessToken: environment.mapbox.accessToken,
        unit: 'metric',
      }),
      'top-left'
    );
  }

  ngAfterViewInit(): void {
    this.map.resize();
    this.listOfEmployees.forEach((emp) => {
      console.log(emp.lat);
      new mapboxgl.Marker().setLngLat([emp.lat, emp.lng]).addTo(this.map);
    });
  }
}

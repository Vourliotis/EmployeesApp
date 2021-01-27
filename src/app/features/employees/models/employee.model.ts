import { Attribute } from './attribute.model';
export class Employee {
  'id': String;
  'name': String;
  'birthday': String;
  'hasCar': boolean;
  'address': String;
  'lng': number;
  'lat': number;
  'attributes': Attribute[];
}

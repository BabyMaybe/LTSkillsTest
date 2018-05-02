import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlaceResultsService {

  places;
  pagination;

  private placesSource = new Subject<any>();

  placesItem = this.placesSource.asObservable();


  updatePlaces(newPlaces) {
    this.placesSource.next(newPlaces);
  }

  constructor() {
  }

}

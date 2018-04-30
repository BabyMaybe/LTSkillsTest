import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlaceResultsService {

  places;
  pagination;

  placesChanged = new Subject<any>();


  updatePlaces(newPlaces) {
    console.log('updating with some new places');
    console.log(newPlaces);
    this.placesChanged.next(newPlaces);
  }

  constructor() {
    this.placesChanged.subscribe(value => {
      console.log('notified of changing values');
      this.places = value;
    });
  }

}

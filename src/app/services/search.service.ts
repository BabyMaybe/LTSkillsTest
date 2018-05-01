import { Injectable } from '@angular/core';

import { } from '@types/googlemaps';

@Injectable()
export class SearchService {
  map;
  service;
  dupont;
  places;

  textSearch(query) {
    let places;
    this.service.textSearch({
        location: this.dupont,
        radius: 200,
        query: query
      }, function(results, status) {
           if (status === google.maps.places.PlacesServiceStatus.OK) {
              results = results;
           }
        });
    return places;

  }

  getNearby() {
    console.log('in nearby');
    const component = this;
    this.service.nearbySearch({
        location: this.dupont,
        radius: 200,
      }, function(results, status) {
        console.log('in callback');
           if (status === google.maps.places.PlacesServiceStatus.OK) {
             console.log('results are...');
             console.log(results);
             component.places = results;
             console.log(component.places);
           }
        });

    console.log('returning places');
    console.log(this.places);
    return this.places;

  }

  constructor() { }

}

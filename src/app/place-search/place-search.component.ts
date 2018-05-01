import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { } from '@types/googlemaps';

import { PlaceResultsService } from '../place-results.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css']
})
export class PlaceSearchComponent implements OnInit {
  @Input('map') map;
  @Input('dupont') dupont;
  form;
  service;
  infoWindow;
  markers = [];
  bounds;

  constructor(private placeResultsService: PlaceResultsService,
              private searchService: SearchService ) {}

  ngOnInit() {
    console.log('initing search');
    this.form = new FormGroup({
      query: new FormControl('')
    });

    this.service = new google.maps.places.PlacesService(this.map);
    this.infoWindow = new google.maps.InfoWindow();
    this.bounds = new google.maps.LatLngBounds();
    
    let component = this;
    console.log('getting nearby places');

    this.service.nearbySearch({
          location: this.dupont,
          radius: 200
        }, function(results, status, pagination) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            component.placeResultsService.updatePlaces(results.slice(0, 10));
            component.placeResultsService.pagination = pagination;
            for (let i=0; i < 10; i++) {
              component.drawMarker(results[i], component);
            }
          }
        });
  }

  drawMarker(place, component) {
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
       map: component.map,
       position: place.geometry.location
    });
    
    component.markers.push(marker);
    
    google.maps.event.addListener(marker, 'click', function() {
      component.infoWindow.setContent(place.name);
      component.infoWindow.open(component.map, this);
    });
    
    component.bounds.extend(marker.getPosition());
  }
  
  clearMarkers() {
    for (let i=0; i<this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
    this.bounds = new google.maps.LatLngBounds();
  }
  
  onSubmit(query) {
    console.log(query.query);

    let component = this;

    let newPlaces = this.service.textSearch({
        location: this.map.getCenter(),
        radius: 200,
        query: query.query
      },
        function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            component.placeResultsService.updatePlaces(results.slice(0, 10));
            component.clearMarkers();
            for (let i=0; i < 10; i++) {
              component.drawMarker(results[i], component);
            }
            component.map.fitBounds(component.bounds);
            console.log('updated service in search');
          }
      });


  }
}

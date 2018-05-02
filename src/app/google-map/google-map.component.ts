import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  dupont = {lat: 38.909653, lng: -77.043432};

  constructor(private searchService: SearchService) { }

  ngOnInit() {

    const mapProp = {
      center: new google.maps.LatLng(this.dupont.lat, this.dupont.lng),
      disableDefaultUI: true,
      mapTypeControl: false,
      zoomControl: true,
      zoom: 18
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.searchService.map = this.map;
    this.searchService.service = new google.maps.places.PlacesService(this.map);
    this.searchService.dupont = this.dupont;
  }

}

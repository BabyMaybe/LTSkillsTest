import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PlaceResultsService } from '../services/place-results.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  places;
  subscription: Subscription;

  constructor(private placeResultsService: PlaceResultsService) {}

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() {
  this.placeResultsService.placesChanged.subscribe(value => {
      console.log('list getting new values');
      console.log(value);
      this.places = value;
    });
  }
}

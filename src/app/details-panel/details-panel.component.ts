import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PlaceDetailService } from '../services/place-detail.service';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.css']
})
export class DetailsPanelComponent implements OnInit {
  subscription: Subscription;
  place;
  dollars;

  constructor(private placeDetailService: PlaceDetailService) { }

  ngOnInit() {
    this.subscription = this.placeDetailService.detailItem.subscribe(place => {
      this.place = place;
      this.dollars = [];
        for (let i = 0; i < this.place.price_level; i++) {
          this.dollars.push('$');
        }
    });
  }

}

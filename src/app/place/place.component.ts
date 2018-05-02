import { Component, Input, OnInit } from '@angular/core';

import { PlaceDetailService } from '../services/place-detail.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place;
  dollars;


  constructor(private placeDetailService: PlaceDetailService) { }

  ngOnInit() {
    this.dollars = [];
    for (let i = 0; i < this.place.price_level; i++) {
      this.dollars.push('$');
    }
  }

  moreInfo() {
    this.placeDetailService.updateDetail(this.place);
  }
}

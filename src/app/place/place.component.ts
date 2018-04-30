import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place;
  dollars;
   

  constructor() { }

  ngOnInit() {
    this.dollars = '$'.repeat(this.place.price_level);
    console.log('making a place! with ', this.place.price_level, ' dollars signs!');
  }

}

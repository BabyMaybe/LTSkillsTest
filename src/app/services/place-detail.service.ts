import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlaceDetailService {

  private detailSource = new Subject<any>();

  detailItem = this.detailSource.asObservable();

  updateDetail(place) {
    this.detailSource.next(place);
  }

  constructor() { }

}

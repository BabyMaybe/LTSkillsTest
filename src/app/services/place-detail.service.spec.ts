import { TestBed, inject } from '@angular/core/testing';

import { PlaceDetailService } from './place-detail.service';

describe('PlaceDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceDetailService]
    });
  });

  it('should be created', inject([PlaceDetailService], (service: PlaceDetailService) => {
    expect(service).toBeTruthy();
  }));
});

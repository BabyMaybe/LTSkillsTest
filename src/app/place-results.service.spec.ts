import { TestBed, inject } from '@angular/core/testing';

import { PlaceResultsService } from './place-results.service';

describe('PlaceResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceResultsService]
    });
  });

  it('should be created', inject([PlaceResultsService], (service: PlaceResultsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { GaleryServiceService } from './galery-service.service';

describe('GaleryServiceService', () => {
  let service: GaleryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

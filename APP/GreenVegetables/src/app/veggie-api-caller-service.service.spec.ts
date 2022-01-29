import { TestBed } from '@angular/core/testing';

import { VeggieApiCallerServiceService } from './veggie-api-caller-service.service';

describe('VeggieApiCallerServiceService', () => {
  let service: VeggieApiCallerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeggieApiCallerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BoxElementDataService } from './box-element-data.service';

describe('BoxElementDataService', () => {
  let service: BoxElementDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxElementDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

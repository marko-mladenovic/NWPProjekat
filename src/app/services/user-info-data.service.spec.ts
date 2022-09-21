import { TestBed } from '@angular/core/testing';

import { UserInfoDataService } from './user-info-data.service';

describe('UserInfoDataService', () => {
  let service: UserInfoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

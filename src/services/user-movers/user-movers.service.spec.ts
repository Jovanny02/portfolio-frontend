import { TestBed } from '@angular/core/testing';

import { UserMoversService } from './user-movers.service';

describe('UserMoversService', () => {
  let service: UserMoversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMoversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

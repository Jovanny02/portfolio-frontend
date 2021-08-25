import { TestBed } from '@angular/core/testing';

import { TopMoversService } from './top-movers.service';

describe('TopMoversService', () => {
  let service: TopMoversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMoversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

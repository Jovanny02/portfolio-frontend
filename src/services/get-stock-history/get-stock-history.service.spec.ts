import { TestBed } from '@angular/core/testing';

import { GetStockHistoryService } from './get-stock-history.service';

describe('GetStockHistoryService', () => {
  let service: GetStockHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStockHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

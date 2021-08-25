import { TestBed } from '@angular/core/testing';

import { UserIncomeService } from './user-income.service';

describe('UserIncomeService', () => {
  let service: UserIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

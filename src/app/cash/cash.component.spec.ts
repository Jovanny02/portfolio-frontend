import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInvestmentsComponent } from './cash.component';

describe('CashInvestmentsComponent', () => {
  let component: CashInvestmentsComponent;
  let fixture: ComponentFixture<CashInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashInvestmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

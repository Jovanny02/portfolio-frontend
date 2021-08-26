import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAccountsComponent } from './investment-accounts.component';

describe('InvestmentAccountsComponent', () => {
  let component: InvestmentAccountsComponent;
  let fixture: ComponentFixture<InvestmentAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

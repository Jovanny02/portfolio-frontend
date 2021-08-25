import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIncomeComponent } from './user-income.component';

describe('UserIncomeComponent', () => {
  let component: UserIncomeComponent;
  let fixture: ComponentFixture<UserIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

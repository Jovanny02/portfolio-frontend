import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoversComponent } from './user-movers.component';

describe('UserMoversComponent', () => {
  let component: UserMoversComponent;
  let fixture: ComponentFixture<UserMoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMoversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

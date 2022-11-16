import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustOrderDetailsComponent } from './cust-order-details.component';

describe('CustOrderDetailsComponent', () => {
  let component: CustOrderDetailsComponent;
  let fixture: ComponentFixture<CustOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

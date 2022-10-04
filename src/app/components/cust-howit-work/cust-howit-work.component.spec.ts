import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustHowitWorkComponent } from './cust-howit-work.component';

describe('CustHowitWorkComponent', () => {
  let component: CustHowitWorkComponent;
  let fixture: ComponentFixture<CustHowitWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustHowitWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustHowitWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

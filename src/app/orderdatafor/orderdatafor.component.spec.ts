import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdataforComponent } from './orderdatafor.component';

describe('OrderdataforComponent', () => {
  let component: OrderdataforComponent;
  let fixture: ComponentFixture<OrderdataforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdataforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdataforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

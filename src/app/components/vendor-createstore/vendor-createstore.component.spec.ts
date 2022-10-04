import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCreatestoreComponent } from './vendor-createstore.component';

describe('VendorCreatestoreComponent', () => {
  let component: VendorCreatestoreComponent;
  let fixture: ComponentFixture<VendorCreatestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorCreatestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCreatestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

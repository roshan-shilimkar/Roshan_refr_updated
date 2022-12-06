import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaddressByZipComponent } from './getaddress-by-zip.component';

describe('GetaddressByZipComponent', () => {
  let component: GetaddressByZipComponent;
  let fixture: ComponentFixture<GetaddressByZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetaddressByZipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetaddressByZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

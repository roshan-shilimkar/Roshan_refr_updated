import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMHOMeComponent } from './crm-home.component';

describe('CRMHOMeComponent', () => {
  let component: CRMHOMeComponent;
  let fixture: ComponentFixture<CRMHOMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRMHOMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMHOMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

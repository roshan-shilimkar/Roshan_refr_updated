import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestampToDateComponent } from './firestamp-to-date.component';

describe('FirestampToDateComponent', () => {
  let component: FirestampToDateComponent;
  let fixture: ComponentFixture<FirestampToDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestampToDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestampToDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

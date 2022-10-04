import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstastoriesComponent } from './instastories.component';

describe('InstastoriesComponent', () => {
  let component: InstastoriesComponent;
  let fixture: ComponentFixture<InstastoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstastoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstastoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

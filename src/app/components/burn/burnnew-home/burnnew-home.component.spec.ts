import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnnewHomeComponent } from './burnnew-home.component';

describe('BurnnewHomeComponent', () => {
  let component: BurnnewHomeComponent;
  let fixture: ComponentFixture<BurnnewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnnewHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnnewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

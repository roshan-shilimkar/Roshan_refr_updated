import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoshanStoreComponentComponent } from './roshan-store-component.component';

describe('RoshanStoreComponentComponent', () => {
  let component: RoshanStoreComponentComponent;
  let fixture: ComponentFixture<RoshanStoreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoshanStoreComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoshanStoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

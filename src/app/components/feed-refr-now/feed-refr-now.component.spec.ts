import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedRefrNowComponent } from './feed-refr-now.component';

describe('FeedRefrNowComponent', () => {
  let component: FeedRefrNowComponent;
  let fixture: ComponentFixture<FeedRefrNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedRefrNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedRefrNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

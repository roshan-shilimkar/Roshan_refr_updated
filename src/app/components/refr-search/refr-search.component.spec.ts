import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrSearchComponent } from './refr-search.component';

describe('RefrSearchComponent', () => {
  let component: RefrSearchComponent;
  let fixture: ComponentFixture<RefrSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharerecommendationComponent } from './sharerecommendation.component';

describe('SharerecommendationComponent', () => {
  let component: SharerecommendationComponent;
  let fixture: ComponentFixture<SharerecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharerecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharerecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

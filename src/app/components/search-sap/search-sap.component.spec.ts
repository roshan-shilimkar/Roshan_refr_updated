import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSAPComponent } from './search-sap.component';

describe('SearchSAPComponent', () => {
  let component: SearchSAPComponent;
  let fixture: ComponentFixture<SearchSAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSAPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

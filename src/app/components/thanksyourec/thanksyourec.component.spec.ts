import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksyourecComponent } from './thanksyourec.component';

describe('ThanksyourecComponent', () => {
  let component: ThanksyourecComponent;
  let fixture: ComponentFixture<ThanksyourecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksyourecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksyourecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

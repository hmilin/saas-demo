import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPromoComponent } from './first-promo.component';

describe('FirstPromoComponent', () => {
  let component: FirstPromoComponent;
  let fixture: ComponentFixture<FirstPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

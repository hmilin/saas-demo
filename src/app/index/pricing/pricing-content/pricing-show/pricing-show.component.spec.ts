import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingShowComponent } from './pricing-show.component';

describe('PricingShowComponent', () => {
  let component: PricingShowComponent;
  let fixture: ComponentFixture<PricingShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

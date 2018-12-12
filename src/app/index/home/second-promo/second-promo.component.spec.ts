import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPromoComponent } from './second-promo.component';

describe('SecondPromoComponent', () => {
  let component: SecondPromoComponent;
  let fixture: ComponentFixture<SecondPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

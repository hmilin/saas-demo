import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookPromoComponent } from './ebook-promo.component';

describe('EbookPromoComponent', () => {
  let component: EbookPromoComponent;
  let fixture: ComponentFixture<EbookPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

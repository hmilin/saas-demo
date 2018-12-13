import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookLearnComponent } from './ebook-learn.component';

describe('EbookLearnComponent', () => {
  let component: EbookLearnComponent;
  let fixture: ComponentFixture<EbookLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

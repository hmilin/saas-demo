import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookQuestionComponent } from './ebook-question.component';

describe('EbookQuestionComponent', () => {
  let component: EbookQuestionComponent;
  let fixture: ComponentFixture<EbookQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

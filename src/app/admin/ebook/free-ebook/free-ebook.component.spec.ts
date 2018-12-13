import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeEbookComponent } from './free-ebook.component';

describe('FreeEbookComponent', () => {
  let component: FreeEbookComponent;
  let fixture: ComponentFixture<FreeEbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeEbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

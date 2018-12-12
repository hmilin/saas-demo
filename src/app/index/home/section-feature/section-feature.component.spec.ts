import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeatureComponent } from './section-feature.component';

describe('SectionFeatureComponent', () => {
  let component: SectionFeatureComponent;
  let fixture: ComponentFixture<SectionFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

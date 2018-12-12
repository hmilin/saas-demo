import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesContentComponent } from './features-content.component';

describe('FeaturesContentComponent', () => {
  let component: FeaturesContentComponent;
  let fixture: ComponentFixture<FeaturesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

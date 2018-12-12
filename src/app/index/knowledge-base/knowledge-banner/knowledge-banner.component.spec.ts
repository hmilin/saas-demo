import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBannerComponent } from './knowledge-banner.component';

describe('KnowledgeBannerComponent', () => {
  let component: KnowledgeBannerComponent;
  let fixture: ComponentFixture<KnowledgeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

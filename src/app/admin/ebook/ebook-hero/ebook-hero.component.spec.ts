import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookHeroComponent } from './ebook-hero.component';

describe('EbookHeroComponent', () => {
  let component: EbookHeroComponent;
  let fixture: ComponentFixture<EbookHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

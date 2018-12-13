import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHeroComponent } from './mobile-hero.component';

describe('MobileHeroComponent', () => {
  let component: MobileHeroComponent;
  let fixture: ComponentFixture<MobileHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

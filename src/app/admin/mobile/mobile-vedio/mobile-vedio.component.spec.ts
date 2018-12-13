import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVedioComponent } from './mobile-vedio.component';

describe('MobileVedioComponent', () => {
  let component: MobileVedioComponent;
  let fixture: ComponentFixture<MobileVedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileVedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRoleComponent } from './mobile-role.component';

describe('MobileRoleComponent', () => {
  let component: MobileRoleComponent;
  let fixture: ComponentFixture<MobileRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

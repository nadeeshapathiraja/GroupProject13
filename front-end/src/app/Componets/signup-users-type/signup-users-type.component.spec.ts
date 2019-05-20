import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUsersTypeComponent } from './signup-users-type.component';

describe('SignupUsersTypeComponent', () => {
  let component: SignupUsersTypeComponent;
  let fixture: ComponentFixture<SignupUsersTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupUsersTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUsersTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

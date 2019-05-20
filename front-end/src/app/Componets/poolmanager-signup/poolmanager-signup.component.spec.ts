import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolmanagerSignupComponent } from './poolmanager-signup.component';

describe('PoolmanagerSignupComponent', () => {
  let component: PoolmanagerSignupComponent;
  let fixture: ComponentFixture<PoolmanagerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolmanagerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolmanagerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

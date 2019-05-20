import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersnotvalidComponent } from './usersnotvalid.component';

describe('UsersnotvalidComponent', () => {
  let component: UsersnotvalidComponent;
  let fixture: ComponentFixture<UsersnotvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersnotvalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersnotvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

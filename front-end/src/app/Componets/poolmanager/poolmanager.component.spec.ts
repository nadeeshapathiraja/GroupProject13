import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolmanagerComponent } from './poolmanager.component';

describe('PoolmanagerComponent', () => {
  let component: PoolmanagerComponent;
  let fixture: ComponentFixture<PoolmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

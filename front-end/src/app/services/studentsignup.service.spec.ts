import { TestBed } from '@angular/core/testing';

import { StudentsignupService } from './studentsignup.service';

describe('StudentsignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsignupService = TestBed.get(StudentsignupService);
    expect(service).toBeTruthy();
  });
});

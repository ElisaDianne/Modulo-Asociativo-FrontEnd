import { TestBed } from '@angular/core/testing';

import { FormAService } from './form-a.service';

describe('FormAService', () => {
  let service: FormAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

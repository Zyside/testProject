import { TestBed } from '@angular/core/testing';

import { CustomValiddtorService } from './custom-validator.service';

describe('CustomValiddtorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomValiddtorService = TestBed.get(CustomValiddtorService);
    expect(service).toBeTruthy();
  });
});

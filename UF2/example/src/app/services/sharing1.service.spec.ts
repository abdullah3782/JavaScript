import { TestBed } from '@angular/core/testing';

import { Sharing1Service } from './sharing1.service';

describe('Sharing1Service', () => {
  let service: Sharing1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharing1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

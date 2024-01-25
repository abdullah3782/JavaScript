import { TestBed } from '@angular/core/testing';

import { Sharing2Service } from './sharing2.service';

describe('Sharing2Service', () => {
  let service: Sharing2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharing2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

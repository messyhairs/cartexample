import { TestBed } from '@angular/core/testing';

import { UsercerdService } from './usercerd.service';

describe('UsercerdService', () => {
  let service: UsercerdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercerdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

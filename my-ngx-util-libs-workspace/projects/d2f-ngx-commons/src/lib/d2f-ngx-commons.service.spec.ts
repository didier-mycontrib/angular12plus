import { TestBed } from '@angular/core/testing';

import { D2fNgxCommonsService } from './d2f-ngx-commons.service';

describe('D2fNgxCommonsService', () => {
  let service: D2fNgxCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D2fNgxCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

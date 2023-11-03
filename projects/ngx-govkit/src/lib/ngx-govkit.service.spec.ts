import { TestBed } from '@angular/core/testing';

import { NgxGovkitService } from './ngx-govkit.service';

describe('NgxGovkitService', () => {
  let service: NgxGovkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGovkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

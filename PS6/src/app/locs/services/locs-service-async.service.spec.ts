import { TestBed } from '@angular/core/testing';

import { LocServiceAsyncService } from './locs-service-async.service';

describe('LocServiceAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocServiceAsyncService = TestBed.get(LocServiceAsyncService);
    expect(service).toBeTruthy();
  });
});

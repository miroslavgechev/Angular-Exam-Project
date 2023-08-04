import { TestBed } from '@angular/core/testing';

import { IsCartEmptyService } from './is-cart-empty.service';

describe('IsCartEmptyService', () => {
  let service: IsCartEmptyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsCartEmptyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

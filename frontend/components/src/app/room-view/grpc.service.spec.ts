import { TestBed } from '@angular/core/testing';

import { GRPCService } from './grpc.service';

describe('GRPCService', () => {
  let service: GRPCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GRPCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

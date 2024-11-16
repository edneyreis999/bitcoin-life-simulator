import { TestBed } from '@angular/core/testing';

import { EventGeneratorService } from './event-generator.service';

describe('EventGeneratorService', () => {
  let service: EventGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

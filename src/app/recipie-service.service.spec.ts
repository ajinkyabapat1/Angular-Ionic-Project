import { TestBed } from '@angular/core/testing';

import { RecipieServiceService } from './recipie-service.service';

describe('RecipieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipieServiceService = TestBed.get(RecipieServiceService);
    expect(service).toBeTruthy();
  });
});

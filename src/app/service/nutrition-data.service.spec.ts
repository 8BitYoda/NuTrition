import { TestBed } from '@angular/core/testing';

import { NutritionDataService } from './nutrition-data.service';

describe('NutritionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutritionDataService = TestBed.get(NutritionDataService);
    expect(service).toBeTruthy();
  });
});

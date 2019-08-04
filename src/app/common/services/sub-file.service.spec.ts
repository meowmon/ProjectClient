import { TestBed } from '@angular/core/testing';

import { SubFileService } from './sub-file.service';

describe('SubFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubFileService = TestBed.get(SubFileService);
    expect(service).toBeTruthy();
  });
});

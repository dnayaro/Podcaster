import { TestBed, inject } from '@angular/core/testing';

import { PodcasterService } from './podcaster.service';

describe('PodcasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodcasterService]
    });
  });

  it('should be created', inject([PodcasterService], (service: PodcasterService) => {
    expect(service).toBeTruthy();
  }));
});

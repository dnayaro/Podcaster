import { TestBed, inject } from '@angular/core/testing';

import { CargandoService } from './cargando.service';

describe('CargandoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargandoService]
    });
  });

  it('should be created', inject([CargandoService], (service: CargandoService) => {
    expect(service).toBeTruthy();
  }));
});

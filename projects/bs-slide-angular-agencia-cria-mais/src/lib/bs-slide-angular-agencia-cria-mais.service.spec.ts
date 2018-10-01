import { TestBed } from '@angular/core/testing';

import { BsSlideAngularAgenciaCriaMaisService } from './bs-slide-angular-agencia-cria-mais.service';

describe('BsSlideAngularAgenciaCriaMaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BsSlideAngularAgenciaCriaMaisService = TestBed.get(BsSlideAngularAgenciaCriaMaisService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AmigosService } from './amigos.service';

describe('AmigosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmigosService = TestBed.get(AmigosService);
    expect(service).toBeTruthy();
  });
});

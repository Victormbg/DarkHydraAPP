import { TestBed } from '@angular/core/testing';

import { JogosService } from './jogos.service';

describe('JogosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JogosService = TestBed.get(JogosService);
    expect(service).toBeTruthy();
  });
});

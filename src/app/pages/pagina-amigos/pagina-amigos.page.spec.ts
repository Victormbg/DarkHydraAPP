import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAmigosPage } from './pagina-amigos.page';

describe('PaginaAmigosPage', () => {
  let component: PaginaAmigosPage;
  let fixture: ComponentFixture<PaginaAmigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAmigosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

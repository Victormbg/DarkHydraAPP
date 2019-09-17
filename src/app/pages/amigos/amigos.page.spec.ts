import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosPage } from './amigos.page';

describe('AmigosPage', () => {
  let component: AmigosPage;
  let fixture: ComponentFixture<AmigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

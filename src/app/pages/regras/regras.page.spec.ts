import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrasPage } from './regras.page';

describe('RegrasPage', () => {
  let component: RegrasPage;
  let fixture: ComponentFixture<RegrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

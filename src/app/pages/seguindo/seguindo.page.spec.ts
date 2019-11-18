import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguindoPage } from './seguindo.page';

describe('SeguindoPage', () => {
  let component: SeguindoPage;
  let fixture: ComponentFixture<SeguindoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguindoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguindoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

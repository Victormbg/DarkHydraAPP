import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaquePage } from './destaque.page';

describe('DestaquePage', () => {
  let component: DestaquePage;
  let fixture: ComponentFixture<DestaquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestaquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

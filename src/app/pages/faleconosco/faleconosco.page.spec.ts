import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaleconoscoPage } from './faleconosco.page';

describe('FaleconoscoPage', () => {
  let component: FaleconoscoPage;
  let fixture: ComponentFixture<FaleconoscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaleconoscoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaleconoscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

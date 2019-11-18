import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguidoresPage } from './seguidores.page';

describe('SeguidoresPage', () => {
  let component: SeguidoresPage;
  let fixture: ComponentFixture<SeguidoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguidoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguidoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

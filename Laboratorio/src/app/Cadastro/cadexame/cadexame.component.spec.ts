import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadexameComponent } from './cadexame.component';

describe('CadexameComponent', () => {
  let component: CadexameComponent;
  let fixture: ComponentFixture<CadexameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadexameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadexameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

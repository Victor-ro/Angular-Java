import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadprocedimentoComponent } from './cadprocedimento.component';

describe('CadprocedimentoComponent', () => {
  let component: CadprocedimentoComponent;
  let fixture: ComponentFixture<CadprocedimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadprocedimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadprocedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosJuridicosOrgComponent } from './datos-juridicos-org.component';

describe('DatosJuridicosOrgComponent', () => {
  let component: DatosJuridicosOrgComponent;
  let fixture: ComponentFixture<DatosJuridicosOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosJuridicosOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosJuridicosOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

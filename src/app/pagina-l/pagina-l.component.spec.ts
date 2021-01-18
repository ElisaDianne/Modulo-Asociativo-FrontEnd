import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLComponent } from './pagina-l.component';

describe('PaginaLComponent', () => {
  let component: PaginaLComponent;
  let fixture: ComponentFixture<PaginaLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

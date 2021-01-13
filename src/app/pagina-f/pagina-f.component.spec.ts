import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFComponent } from './pagina-f.component';

describe('PaginaFComponent', () => {
  let component: PaginaFComponent;
  let fixture: ComponentFixture<PaginaFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

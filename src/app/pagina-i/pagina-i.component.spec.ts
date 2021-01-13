import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIComponent } from './pagina-i.component';

describe('PaginaIComponent', () => {
  let component: PaginaIComponent;
  let fixture: ComponentFixture<PaginaIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEComponent } from './pagina-e.component';

describe('PaginaEComponent', () => {
  let component: PaginaEComponent;
  let fixture: ComponentFixture<PaginaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

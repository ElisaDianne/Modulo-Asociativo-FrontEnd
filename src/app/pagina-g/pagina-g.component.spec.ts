import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGComponent } from './pagina-g.component';

describe('PaginaGComponent', () => {
  let component: PaginaGComponent;
  let fixture: ComponentFixture<PaginaGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

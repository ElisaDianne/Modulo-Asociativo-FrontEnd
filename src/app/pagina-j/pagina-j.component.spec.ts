import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaJComponent } from './pagina-j.component';

describe('PaginaJComponent', () => {
  let component: PaginaJComponent;
  let fixture: ComponentFixture<PaginaJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

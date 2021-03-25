import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaKComponent } from './pagina-k.component';

describe('PaginaKComponent', () => {
  let component: PaginaKComponent;
  let fixture: ComponentFixture<PaginaKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

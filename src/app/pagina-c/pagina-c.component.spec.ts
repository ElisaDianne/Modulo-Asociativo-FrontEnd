import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCComponent } from './pagina-c.component';

describe('PaginaCComponent', () => {
  let component: PaginaCComponent;
  let fixture: ComponentFixture<PaginaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

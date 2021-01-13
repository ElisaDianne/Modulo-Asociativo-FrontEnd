import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDComponent } from './pagina-d.component';

describe('PaginaDComponent', () => {
  let component: PaginaDComponent;
  let fixture: ComponentFixture<PaginaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

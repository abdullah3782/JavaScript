import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorCronometroComponent } from './contenedor-cronometro.component';

describe('ContenedorCronometroComponent', () => {
  let component: ContenedorCronometroComponent;
  let fixture: ComponentFixture<ContenedorCronometroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorCronometroComponent]
    });
    fixture = TestBed.createComponent(ContenedorCronometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

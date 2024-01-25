import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNumericoComponent } from './panel-numerico.component';

describe('PanelNumericoComponent', () => {
  let component: PanelNumericoComponent;
  let fixture: ComponentFixture<PanelNumericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelNumericoComponent]
    });
    fixture = TestBed.createComponent(PanelNumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

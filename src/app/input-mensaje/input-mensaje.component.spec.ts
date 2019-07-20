import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMensajeComponent } from './input-mensaje.component';

describe('InputMensajeComponent', () => {
  let component: InputMensajeComponent;
  let fixture: ComponentFixture<InputMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

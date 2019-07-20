import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMensajesComponent } from './lista-mensajes.component';

describe('ListaMensajesComponent', () => {
  let component: ListaMensajesComponent;
  let fixture: ComponentFixture<ListaMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

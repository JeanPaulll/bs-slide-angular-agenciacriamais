import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSlideAngularAgenciaCriaMaisComponent } from './bs-slide-angular-agencia-cria-mais.component';

describe('BsSlideAngularAgenciaCriaMaisComponent', () => {
  let component: BsSlideAngularAgenciaCriaMaisComponent;
  let fixture: ComponentFixture<BsSlideAngularAgenciaCriaMaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsSlideAngularAgenciaCriaMaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsSlideAngularAgenciaCriaMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

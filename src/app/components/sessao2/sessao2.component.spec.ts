import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessao2Component } from './sessao2.component';

describe('Sessao2Component', () => {
  let component: Sessao2Component;
  let fixture: ComponentFixture<Sessao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sessao2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sessao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

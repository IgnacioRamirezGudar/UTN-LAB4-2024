import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejern1Component } from './ejern1.component';

describe('Ejern1Component', () => {
  let component: Ejern1Component;
  let fixture: ComponentFixture<Ejern1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejern1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejern1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

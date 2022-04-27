import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDynBs5Component } from './with-dyn-bs5.component';

describe('WithDynBs5Component', () => {
  let component: WithDynBs5Component;
  let fixture: ComponentFixture<WithDynBs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithDynBs5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDynBs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

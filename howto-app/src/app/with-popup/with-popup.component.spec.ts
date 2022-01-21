import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithPopupComponent } from './with-popup.component';

describe('WithPopupComponent', () => {
  let component: WithPopupComponent;
  let fixture: ComponentFixture<WithPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

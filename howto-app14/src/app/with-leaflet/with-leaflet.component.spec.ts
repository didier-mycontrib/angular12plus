import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLeafletComponent } from './with-leaflet.component';

describe('WithLeafletComponent', () => {
  let component: WithLeafletComponent;
  let fixture: ComponentFixture<WithLeafletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithLeafletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

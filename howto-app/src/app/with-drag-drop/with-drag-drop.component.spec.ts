import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDragDropComponent } from './with-drag-drop.component';

describe('WithDragDropComponent', () => {
  let component: WithDragDropComponent;
  let fixture: ComponentFixture<WithDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

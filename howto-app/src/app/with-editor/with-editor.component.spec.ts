import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithEditorComponent } from './with-editor.component';

describe('WithEditorComponent', () => {
  let component: WithEditorComponent;
  let fixture: ComponentFixture<WithEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

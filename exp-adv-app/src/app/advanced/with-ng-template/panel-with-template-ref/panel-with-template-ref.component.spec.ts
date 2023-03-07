import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelWithTemplateRefComponent } from './panel-with-template-ref.component';

describe('PanelWithTemplateRefComponent', () => {
  let component: PanelWithTemplateRefComponent;
  let fixture: ComponentFixture<PanelWithTemplateRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelWithTemplateRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelWithTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

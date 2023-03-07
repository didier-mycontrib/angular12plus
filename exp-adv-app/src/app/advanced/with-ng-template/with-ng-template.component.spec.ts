import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithNgTemplateComponent } from './with-ng-template.component';

describe('WithNgTemplateComponent', () => {
  let component: WithNgTemplateComponent;
  let fixture: ComponentFixture<WithNgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithNgTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

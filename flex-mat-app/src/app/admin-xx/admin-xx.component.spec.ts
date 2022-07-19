import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminXxComponent } from './admin-xx.component';

describe('AdminXxComponent', () => {
  let component: AdminXxComponent;
  let fixture: ComponentFixture<AdminXxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminXxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminXxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

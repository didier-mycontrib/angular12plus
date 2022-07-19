import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminYyComponent } from './admin-yy.component';

describe('AdminYyComponent', () => {
  let component: AdminYyComponent;
  let fixture: ComponentFixture<AdminYyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminYyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminYyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

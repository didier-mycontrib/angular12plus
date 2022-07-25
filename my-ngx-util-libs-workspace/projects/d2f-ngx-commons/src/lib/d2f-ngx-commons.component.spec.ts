import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D2fNgxCommonsComponent } from './d2f-ngx-commons.component';

describe('D2fNgxCommonsComponent', () => {
  let component: D2fNgxCommonsComponent;
  let fixture: ComponentFixture<D2fNgxCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D2fNgxCommonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D2fNgxCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

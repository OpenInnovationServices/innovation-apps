import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtdDashboardComponent } from './ctd-dashboard.component';

describe('CtdDashboardComponent', () => {
  let component: CtdDashboardComponent;
  let fixture: ComponentFixture<CtdDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtdDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

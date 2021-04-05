import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtdPlayChallengeComponent } from './ctd-play-challenge.component';

describe('CtdPlayChallengeComponent', () => {
  let component: CtdPlayChallengeComponent;
  let fixture: ComponentFixture<CtdPlayChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtdPlayChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtdPlayChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

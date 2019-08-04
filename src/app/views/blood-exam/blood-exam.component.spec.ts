import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodExamComponent } from './blood-exam.component';

describe('BloodExamComponent', () => {
  let component: BloodExamComponent;
  let fixture: ComponentFixture<BloodExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

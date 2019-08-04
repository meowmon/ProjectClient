import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XquangComponent } from './xquang.component';

describe('XquangComponent', () => {
  let component: XquangComponent;
  let fixture: ComponentFixture<XquangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XquangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XquangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

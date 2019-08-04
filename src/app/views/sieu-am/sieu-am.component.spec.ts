import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SieuAmComponent } from './sieu-am.component';

describe('SieuAmComponent', () => {
  let component: SieuAmComponent;
  let fixture: ComponentFixture<SieuAmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SieuAmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SieuAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

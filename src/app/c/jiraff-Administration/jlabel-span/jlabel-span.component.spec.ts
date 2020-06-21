import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JlabelSpanComponent } from './jlabel-span.component';

describe('JlabelSpanComponent', () => {
  let component: JlabelSpanComponent;
  let fixture: ComponentFixture<JlabelSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JlabelSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JlabelSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

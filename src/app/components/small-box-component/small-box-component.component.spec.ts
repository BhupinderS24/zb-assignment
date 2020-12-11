import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBoxComponentComponent } from './small-box-component.component';

describe('SmallBoxComponentComponent', () => {
  let component: SmallBoxComponentComponent;
  let fixture: ComponentFixture<SmallBoxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBoxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

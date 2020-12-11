import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBoxComponentComponent } from './big-box-component.component';

describe('BigBoxComponentComponent', () => {
  let component: BigBoxComponentComponent;
  let fixture: ComponentFixture<BigBoxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBoxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

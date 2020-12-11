import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonShapeComponent } from './polygon-shape.component';

describe('PolygonShapeComponent', () => {
  let component: PolygonShapeComponent;
  let fixture: ComponentFixture<PolygonShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

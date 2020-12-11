import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-polygon-shape',
  templateUrl: './polygon-shape.component.html',
  styleUrls: ['./polygon-shape.component.css'],
})
export class PolygonShapeComponent implements OnInit {
  @Input()
  styleObj;
  constructor() {}

  ngOnInit(): void {}
}

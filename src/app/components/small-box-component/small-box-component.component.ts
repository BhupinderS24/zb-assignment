import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-box-component',
  templateUrl: './small-box-component.component.html',
  styleUrls: ['./small-box-component.component.css'],
})
export class SmallBoxComponentComponent implements OnInit {
  constructor() {}

  @Input()
  topHeading;

  ngOnInit(): void {}
}

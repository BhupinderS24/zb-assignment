import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-box-component',
  templateUrl: './big-box-component.component.html',
  styleUrls: ['./big-box-component.component.css'],
})
export class BigBoxComponentComponent implements OnInit {
  constructor() {}

  @Input()
  topHeading;

  styleObj = {
    outerMost: { height: '56px', width: '166px', right: '50px' },
    rightBox: { height: '30px', width: '30px', 'border-color': '#5b198d' },
    leftBox: { height: '30px', width: '30px', 'border-color': '#5b198d' },
    outerBox: { height: '52px', width: '162px', background: '#ddd' },
    box: { height: '50px', width: '160px' },
  };

  ngOnInit(): void {}
}

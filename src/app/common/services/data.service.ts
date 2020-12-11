import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  greenBoxArr = [
    {
      topHeading: 'sonia',
      bottomHeading: 'test 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      styleObj: {
        outerMost: { width: '106px', height: '56px', left: '80px' },
        rightBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        leftBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        outerBox: { height: '52px', width: '102px', background: '#3dc18d' },
        box: { height: '50px', width: '100px' },
      },
    },
    {
      topHeading: 'sonia',
      bottomHeading: 'sonla 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      styleObj: {
        outerMost: { width: '106px', height: '56px', left: '80px' },
        rightBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        leftBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        outerBox: { height: '52px', width: '102px', background: '#3dc18d' },
        box: { height: '50px', width: '100px' },
      },
    },
    {
      topHeading: 'sonia',
      bottomHeading: 'BMZAP - United...',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      styleObj: {
        outerMost: { width: '106px', height: '56px', left: '80px' },
        rightBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        leftBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        outerBox: { height: '52px', width: '102px', background: '#3dc18d' },
        box: { height: '50px', width: '100px' },
      },
    },
    {
      topHeading: 'sonia',
      bottomHeading: 'zapbuild Italy',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      styleObj: {
        outerMost: { width: '106px', height: '56px', left: '80px' },
        rightBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        leftBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        outerBox: { height: '52px', width: '102px', background: '#3dc18d' },
        box: { height: '50px', width: '100px' },
      },
    },
    {
      topHeading: 'sonia',
      bottomHeading: 'sonla-6',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      styleObj: {
        outerMost: { width: '106px', height: '56px', left: '80px' },
        rightBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        leftBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        outerBox: { height: '52px', width: '102px', background: '#3dc18d' },
        box: { height: '50px', width: '100px' },
      },
    },
    {
      topHeading: 'sonia',
      bottomHeading: 'sonla-6',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      styleObj: {
        outerMost: { width: '106px', height: '56px', left: '80px' },
        rightBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        leftBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        outerBox: { height: '52px', width: '102px', background: '#3dc18d' },
        box: { height: '50px', width: '100px' },
      },
    },
    {
      topHeading: 'sonia',
      bottomHeading: 'sonla-6',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      styleObj: {
        outerMost: { width: '106px', height: '56px', left: '80px' },
        rightBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        leftBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        outerBox: { height: '52px', width: '102px', background: '#3dc18d' },
        box: { height: '50px', width: '100px' },
      },
    },
    {
      topHeading: 'sonia',
      bottomHeading: 'sonla-6',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      styleObj: {
        outerMost: { width: '106px', height: '56px', left: '80px' },
        rightBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        leftBox: { height: '30px', width: '30px', 'border-color': '#3dc18d' },
        outerBox: { height: '52px', width: '102px', background: '#3dc18d' },
        box: { height: '50px', width: '100px' },
      },
    },
  ];

  private messageSource = new BehaviorSubject(this.greenBoxArr);
  currentData = this.messageSource.asObservable();

  changeData(message: any) {
    this.messageSource.next(message);
  }
}

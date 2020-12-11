import { Component, OnInit } from '@angular/core';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {}

  greenBoxArr: any;

  ngOnInit(): void {
    this.dataService.currentData.subscribe((greeBoxArr: any) => {
      this.greenBoxArr = greeBoxArr;
    });
  }
}

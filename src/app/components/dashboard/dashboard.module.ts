import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { SmallBoxComponentComponent } from '../../components/small-box-component/small-box-component.component';
import { BigBoxComponentComponent } from '../../components/big-box-component/big-box-component.component';
import { PolygonShapeComponent } from '../../components/polygon-shape/polygon-shape.component';
@NgModule({
  declarations: [
    DashboardComponent,
    SmallBoxComponentComponent,
    BigBoxComponentComponent,
    PolygonShapeComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, MatIconModule],
  entryComponents: [],
})
export class DashboardModule {}

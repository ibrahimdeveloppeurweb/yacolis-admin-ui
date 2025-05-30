import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbaordRoutingModule } from './dashbaord-routing.module';
import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    DashboardDefaultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashbaordRoutingModule
  ]
})
export class DashbaordModule { }

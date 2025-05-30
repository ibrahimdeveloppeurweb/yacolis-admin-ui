import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// page route
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
  
  ],
  imports: [
    NgbModule,
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }

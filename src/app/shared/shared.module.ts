import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgPipesModule } from 'ngx-pipes';
import { SimplebarAngularModule } from 'simplebar-angular';

// component
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { NoDataComponent } from './no-data/no-data.component';
import { AlertModule, CardModule } from './components';
import { AddEntityFinderComponent } from '../shared/add-entity-finder/add-entity-finder.component';
import { FilterComponent } from '../shared/filter/filter.component';
import { FolderUploadComponent } from '../shared/folder-upload/folder-upload.component';
import { FolderUploaderComponent } from '../shared/folder-uploader/folder-uploader.component';
import { ImageUploaderComponent } from '../shared/image-uploader/image-uploader.component';
import { LogComponent } from '../shared/log/log.component';
import { NoDroitComponent } from '../shared/no-droit/no-droit.component';
import { NoFoundComponent } from '../shared/no-found/no-found.component';
import { PopComponent } from '../shared/pop/pop.component';
import { ReportComponent } from '../shared/report/report.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { EntityFinderComponent } from '../shared/entity-finder/entity-finder.component';
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ApexChartComponent } from './components/chart/apex-chart/apex-chart.component';
import { DxGanttComponent } from './components/dx-gantt/dx-gantt/dx-gantt.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchComponent } from './components/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    NoDataComponent,
    AddEntityFinderComponent,
    FilterComponent,
    FolderUploadComponent,
    FolderUploaderComponent,
    ImageUploaderComponent,
    LogComponent,
    NoDataComponent,
    NoDroitComponent,
    NoFoundComponent,
    PopComponent,
    ReportComponent,
    LoadingComponent,
    ApexChartComponent,
    DxGanttComponent,
    GalleryComponent,
    SearchComponent,
    SpinnerComponent,
    ToastComponent,
    EntityFinderComponent,
  ],
  imports: [
    CommonModule,
    AlertModule,
    NgPipesModule,
    BsDatepickerModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    SimplebarAngularModule,
    NgSelectModule,
    BsDropdownModule.forRoot(),


    CardModule,
    NgbCollapseModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbDropdownModule,
  ],
  exports: [
    AlertModule,
    BreadcrumbsComponent,
    NgPipesModule,
    BsDatepickerModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SimplebarAngularModule,
    NoDataComponent,

    CardModule,
    NgbCollapseModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbDropdownModule,

    ReactiveFormsModule,
    AlertModule,
    CardModule,
    ModalModule,
    ApexChartComponent,
    GalleryComponent,
    ToastComponent,
    FilterComponent,
    ReportComponent,
    ImageUploaderComponent,
    FolderUploaderComponent,
    EntityFinderComponent,
    LoadingComponent,
    NoDataComponent,
    NoDroitComponent,
    DxGanttComponent,
    SearchComponent,
    NgSelectModule,
    FolderUploadComponent,
    LogComponent
  ]
})
export class SharedModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Language
// import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Offcanvas
// import { NgxAsideModule } from 'ngx-aside';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

// Spinner
import { NgxSpinnerModule } from "ngx-spinner";


// component
import { LayoutComponent } from './layout.component';
import { VerticalComponent } from './vertical/vertical.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
// import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { MainComponent } from './main/main.component';
import { TwoColumnSidebarComponent } from './two-column-sidebar/two-column-sidebar.component';
import { HorizontalTopbarComponent } from './horizontal-topbar/horizontal-topbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    VerticalComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    TwoColumnSidebarComponent,
    HorizontalTopbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    SimplebarAngularModule,
    BsDropdownModule.forRoot(),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // LanguageService
  ],
})
export class LayoutsModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Drop Zone
import { NgxDropzoneModule } from 'ngx-dropzone';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';

// Count To
import { CountUpModule } from 'ngx-countup';

// Range Slider
import { NgxSliderModule } from 'ngx-slider-v2';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';
// Ck Editer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Leaflet Map
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Bootstrap Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';

// Component
import { NgbdProductsSortableHeader } from './products/products-sortable.directive';
import { NgbdOrderSortableHeader } from './orders/orders-sortable.directive';
import { ProductsComponent } from './products/products.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { CustomersComponent } from './customers/customers.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SellersComponent } from './sellers/sellers.component';
import { SellerOverviewComponent } from './seller-overview/seller-overview.component';
import { NgbdSellerOverviewSortableHeader } from './seller-overview/seller-overview-sortable.directive';


@NgModule({
  declarations: [
    ProductsComponent,
    NgbdProductsSortableHeader,
    NgbdOrderSortableHeader,
    ProductsGridComponent,
    ProductDetailsComponent,
    AddProductComponent,
    OrdersComponent,
    OrderOverviewComponent,
    CustomersComponent,
    CartComponent,
    CheckoutComponent,
    SellersComponent,
    SellerOverviewComponent,
    NgbdSellerOverviewSortableHeader
  ],
  imports: [
    CommonModule,
    SharedModule,
    EcommerceRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    SlickCarouselModule,
    SimplebarAngularModule,
    TooltipModule.forRoot(),
    NgApexchartsModule,
    CountUpModule,
    AlertModule.forRoot(),
    NgSelectModule,
    NgxSliderModule,
    CKEditorModule,
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    LeafletModule,
    RatingModule.forRoot(),
    NgxDropzoneModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommerceModule { }

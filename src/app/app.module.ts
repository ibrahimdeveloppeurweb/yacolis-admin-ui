import localeFr from '@angular/common/locales/fr';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

// Page Route
import { LayoutsModule } from './layouts/layouts.module';
import { ToastrModule } from 'ngx-toastr';

// Laguage
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// component
import { AppComponent } from './app.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
// import { LoadingInterceptorProvider } from './interceptor/loading.interceptor';
import {RouterModule} from "@angular/router";
import {NgSelectModule} from "@ng-select/ng-select";
import { SharedModule } from '@shared/shared.module'; 
import { JwtInterceptor } from './interceptor/jwt-interceptor';
import { HttpCoreInterceptor } from './interceptor/http-core.inteceptor';
import { HandlerErrorInterceptor } from './interceptor/handler-error.interceptor';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';




export function permissionFactory(ngxPermissionsService: NgxPermissionsService) {
  const permission = JSON.parse(localStorage.getItem('token-zen-data')!)?.permission ? JSON.parse(localStorage.getItem('token-zen-data')!)?.permission : [];
  return () => ngxPermissionsService.loadPermissions(permission)
}

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    AuthlayoutComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule,
    NgSelectModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutsModule,
    SharedModule,
    ToastrModule.forRoot(),
    NgxPermissionsModule.forRoot() 
  ],
  providers: [
    { provide: localeFr, useValue: 'fr-FR' },
 //   { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpCoreInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HandlerErrorInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: permissionFactory, deps: [NgxPermissionsService], multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

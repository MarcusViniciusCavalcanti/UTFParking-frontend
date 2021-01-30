import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';

import { AppBreadcrumbModule, } from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ContainerModule } from './containers/container.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { UnauthorizedInterceptor } from './core/interceptors/unauthorized.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBreadcrumbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    IconSetModule.forRoot(),
    ContainerModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    P404Component,
    P500Component,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

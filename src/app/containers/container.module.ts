import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout';
import { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule } from '@coreui/angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';



@NgModule({
  declarations: [ DefaultLayoutComponent ],
  imports: [
    CommonModule,
    AppHeaderModule,
    BsDropdownModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    AppBreadcrumbModule,
    RouterModule,
    AppAsideModule,
    TabsModule,
    AppFooterModule
  ],
  exports: [ DefaultLayoutComponent ]
})
export class ContainerModule { }

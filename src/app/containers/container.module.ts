import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout';
import { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule } from '@coreui/angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModeSystemComponent } from './mode-system/mode-system.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ DefaultLayoutComponent, ModeSystemComponent, SideBarComponent, NavBarItemComponent ],
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
    AppFooterModule,
    ReactiveFormsModule
  ],
  exports: [ DefaultLayoutComponent ]
})
export class ContainerModule { }

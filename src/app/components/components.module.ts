import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeProfileUserComponent } from './badge-profile-user/badge-profile-user.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [BadgeProfileUserComponent, PaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [BadgeProfileUserComponent, PaginationComponent]
})
export class ComponentsModule { }

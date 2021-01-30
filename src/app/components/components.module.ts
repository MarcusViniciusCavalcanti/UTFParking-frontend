import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeProfileUserComponent } from './badge-profile-user/badge-profile-user.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BadgeProfileUserComponent, PaginationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [BadgeProfileUserComponent, PaginationComponent]
})
export class ComponentsModule { }

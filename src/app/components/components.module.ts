import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeProfileUserComponent } from './badge-profile-user/badge-profile-user.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './form-user/form-user.component';



@NgModule({
  declarations: [BadgeProfileUserComponent, PaginationComponent, FormUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [BadgeProfileUserComponent, PaginationComponent, FormUserComponent]
})
export class ComponentsModule { }

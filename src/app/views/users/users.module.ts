import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAllComponent } from './users-all/users-all.component';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [UsersAllComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class UsersModule { }

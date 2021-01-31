import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAllComponent } from './users-all/users-all.component';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { UserCreateComponent } from './create/user-create.component';



@NgModule({
  declarations: [UsersAllComponent, UserCreateComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class UsersModule { }

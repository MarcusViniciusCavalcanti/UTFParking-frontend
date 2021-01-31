import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersAllComponent } from './users-all/users-all.component';
import { UserCreateComponent } from './create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: UsersAllComponent,
    data: {
      title: 'Lista de todo'
    },
  },
  {
    path: 'todos',
    component: UsersAllComponent,
    data: {
      title: 'Lista de todos'
    },
  },
  {
    path: 'novo',
    component: UserCreateComponent,
    data: {
      title: 'Registrar novo usuário'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

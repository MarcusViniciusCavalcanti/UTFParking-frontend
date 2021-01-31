import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersAllComponent } from './users-all/users-all.component';
import { UserCreateComponent } from './users-create/user-create.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      title: 'Usuários'
    },
    children: [
      {
        path: '',
        component: UsersAllComponent,
        data: {
          title: 'Lista de todos'
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
      {
        path: 'detalhes/:id',
        component: UsersDetailsComponent,
        data: {
          title: 'Detalhes do Usuário'
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

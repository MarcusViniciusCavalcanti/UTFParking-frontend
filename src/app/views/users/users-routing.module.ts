import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersAllComponent } from './users-all/users-all.component';

const routes: Routes = [
  {
    path: '',
    component: UsersAllComponent,
    data: {
      title: 'Todos'
    },
  },
  {
    path: 'todos',
    component: UsersAllComponent,
    data: {
      title: 'Todos'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

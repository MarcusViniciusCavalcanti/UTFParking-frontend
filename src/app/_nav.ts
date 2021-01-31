import { INavData } from '@coreui/angular';
import { Role } from './core/data/user';

export class NavItemsService {

  getItems(roles: Role[]) {
    const items: INavData[] = [
      {
        name: 'Home',
        url: '/home',
        icon: 'icon-home',
      },
    ];
    roles.forEach(role => {
      if (role.name === 'ROLE_ADMIN') {
        items.push(...navItemsAdmin);
      }

      if (role.name === 'ROLE_DRIVER') {
        items.push(...navItemsDrive);
      }

      if (role.name === 'ROLE_OPERATOR') {
        items.push(...navItemsOperator);
      }
    });

    return items;
  }
}

const navItemsDrive: INavData[] = [
  {
    title: true,
    name: 'Carro'
  },
];
const navItemsOperator: INavData[] = [
  {
    title: true,
    name: 'Reconhecimentos'
  },
];


const navItemsAdmin: INavData[] = [
  {
    name: 'Dashboard',
    url: '/home/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Sistema'
  },
  {
    name: 'Usuários',
    url: '/usuarios',
    icon: 'cil-group',
    children: [
      {
        name: 'Listar Todos',
        url: '/usuarios/todos',
      },
      {
        name: 'Adicionar',
        url: '/usuarios/novo',
      },
    ]
  },
];

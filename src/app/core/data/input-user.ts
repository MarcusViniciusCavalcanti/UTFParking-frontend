import { TypeUser } from './type-user';

export class InputUser {
  name: string;
  username: string;
  password: string;
  authorities: Array<number>;
  type: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  carPlate: string;
  carModel: string;
}

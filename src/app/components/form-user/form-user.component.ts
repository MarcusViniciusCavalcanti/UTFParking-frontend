import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from '../../core/data/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputUser } from '../../core/data/input-user';
import { ModeSystem } from '../../core/data/mode-system.enum';
import { RoleService } from '../../core/service/security/role.service';
import { UserService } from '../../core/service/user/user.service';
import { TypeUser } from '../../core/data/type-user';


export class InputFormUser {
  name: string;
  username: string;
  password: string;
  authorities: string;
  type: string;
  accountNonExpired: boolean = true;
  accountNonLocked: boolean = true;
  credentialsNonExpired: boolean = true;
  enabled: boolean = true;
  carPlate: string;
  carModel: string;
}

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  @Input() inputUser: InputFormUser;
  @Input() isUpdateUser: boolean;
  @Output() saveUser = new EventEmitter<InputUser>();

  userForm: FormGroup;
  ModeSystem: ModeSystem;
  modeSystem: string;

  roles: Role[];
  rolesApi: Role[];
  types: TypeUser[];

  constructor(private formBuilder: FormBuilder,
              private roleService: RoleService,
              private userService: UserService) {
    this.roleService.getAllRoles().subscribe(roles => this.rolesApi = roles);
    this.userService.getTypes().subscribe(types => this.types = types);
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name:                   [this.inputUser.name],
      username:               [this.inputUser.username],
      password:               [this.inputUser.password],
      authorities:            [this.inputUser.authorities],
      type:                   [this.inputUser.type],
      accountNonExpired:      [this.inputUser.accountNonExpired],
      accountNonLocked:       [this.inputUser.accountNonLocked],
      credentialsNonExpired:  [this.inputUser.credentialsNonExpired],
      enabled:                [this.inputUser.enabled],
      carPlate:               [this.inputUser.carPlate],
      carModel:               [this.inputUser.carModel],
    });
  }

  save(user: InputUser) {
    if (this.userForm.invalid) {



      this.saveUser.emit(user);
    }
  }

  mode(mode: ModeSystem) {
    return this.modeSystem === mode;
  }

  changeTypeUser(event) {
    const value = event.target.value;
    if (value === '1: STUDENTS' || value === '2: SPEAKER') {
      this.roles = this.rolesApi.filter(role => role.roleId === 1);
    } else if (value === '3: SERVICE') {
      this.roles = this.rolesApi;
    }
  }

  isEnabled() {
    return this.roles ? null : '';
  }
}

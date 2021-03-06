import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from '../../core/data/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  static getAuthoroties(authoroty) {
    if (authoroty === 'ROLE_ADMIN') {
      return [1, 2, 3];
    } else {
      return [1];
    }
  }
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
      name:                   [this.inputUser.name,
        [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      username:               [this.inputUser.username,
        [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      password:               [this.inputUser.password],
      authorities:            [this.inputUser.authorities, [Validators.required]],
      type:                   [this.inputUser.type, [Validators.required]],
      accountNonExpired:      [this.inputUser.accountNonExpired],
      accountNonLocked:       [this.inputUser.accountNonLocked],
      credentialsNonExpired:  [this.inputUser.credentialsNonExpired],
      enabled:                [this.inputUser.enabled],
      carPlate:               [this.inputUser.carPlate],
      carModel:               [this.inputUser.carModel],
    });
  }

  get name() {
    return this.userForm.controls.name;
  }

  get username() {
    return this.userForm.controls.username;
  }

  get authorities() {
    return this.userForm.controls.authorities;
  }

  get type() {
    return this.userForm.controls.type;
  }

  save(user: InputUser) {
    if (this.userForm.invalid) {
      this.saveUser.emit(user);
    }
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

  submit() {
    if (this.userForm.valid) {
      const dataForm = this.userForm.getRawValue();
      const input = new InputUser();

      input.name = dataForm.name;
      input.username = dataForm.username;
      input.password = dataForm.password;
      input.authorities = InputFormUser.getAuthoroties(dataForm.authorities);
      input.type = dataForm.type;
      input.accountNonExpired = dataForm.accountNonExpired;
      input.accountNonLocked = dataForm.accountNonLocked;
      input.credentialsNonExpired = dataForm.credentialsNonExpired;
      input.enabled = dataForm.enabled;
      input.carPlate = dataForm.carPlate;
      input.carModel = dataForm.carModel;

      this.saveUser.emit(input);
    } else {
      Object.keys(this.userForm.controls).forEach(field => {
        const control = this.userForm.get(field);
        control.markAsTouched();
      });
    }
  }

  isInvalid(field) {
    return this.userForm.get(field).valid && this.userForm.get(field).touched;
  }
}

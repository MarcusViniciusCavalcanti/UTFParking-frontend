import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role, User } from '../../../core/data/user';
import { TypeUser } from '../../../core/data/type-user';
import { RoleService } from '../../../core/service/security/role.service';
import { UserService } from '../../../core/service/user/user.service';
import { Page } from '../../../core/data/page';

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
})
export class UsersAllComponent implements OnInit {
  filterForm: FormGroup;
  page: Page<User>;
  roles: Role[];
  types: TypeUser[];
  selectActives = [{value: true, name: 'Sim'}, {value: false, name: 'Não'}];
  displayes = ['ID', 'Nome', 'Tipo', 'Perfils', 'Ativo?', 'Carros'];

  sizeElements = 5;

  constructor(private formBuilder: FormBuilder,
              private roleService: RoleService,
              private userService: UserService) {
    this.roleService.getAllRoles().subscribe(roles => this.roles = roles);
    this.userService.getTypes().subscribe(types => this.types = types);
  }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      name: ['', Validators.max(2)],
      roles: [''],
      types: [''],
      active: ['']
    });

    this.userService.getPage().subscribe(page => {
      this.page = page;
    });

    this.userService.getAllUser(0, this.sizeElements, 'name', 'ASC', '', '', '', true);
  }

  transalater(user: User) {
    return TypeUser.translanter(user.type);
  }

  filter() {
    this.getPage(0);
  }

  getNewPage(event) {
    this.getPage(event);
  }

  cleanFilter() {
    this.filterForm.controls.name.setValue('');
    this.filterForm.controls.roles.setValue('') ;
    this.filterForm.controls.types.setValue('');
    this.filterForm.controls.active.setValue('');

  }

  getPage(num: number) {
    const name = this.filterForm.controls.name.value || '';
    const profile = this.filterForm.controls.roles.value.name || '';
    const type = this.filterForm.controls.types.value.name || '';
    const active = this.filterForm.controls.active.value.value === undefined ? true : this.filterForm.controls.active.value.value;

    this.userService.getAllUser(
      num,
      this.sizeElements,
      'name',
      'ASC',
      name,
      profile,
      type,
      active
    );
  }

  changeSize(num: number) {
    this.sizeElements = num;
    this.getPage(0);
  }
}

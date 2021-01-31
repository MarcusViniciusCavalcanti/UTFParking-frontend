import { Component, OnInit } from '@angular/core';
import { InputFormUser } from '../../../components/form-user/form-user.component';
import { InputUser } from '../../../core/data/input-user';
import { UserService } from '../../../core/service/user/user.service';
import { User } from '../../../core/data/user';

@Component({
  selector: 'app-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  mensage: string;
  user: User;
  isError: boolean;
  inputUser: InputFormUser = new InputFormUser();
  
  constructor(private userService: UserService) {
  }
  
  ngOnInit(): void {
    this.inputUser.type = '';
    this.inputUser.authorities = null;
  }

  submit(inputUser: InputUser) {
    this.userService.create(inputUser).subscribe(user => {
      this.user = user;
    }, error => {
      this.isError = true;
      console.error(error);
    });
  }
}

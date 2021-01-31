import { Component, OnInit } from '@angular/core';
import { InputFormUser } from '../../../components/form-user/form-user.component';

@Component({
  selector: 'app-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  
  inputUser: InputFormUser = new InputFormUser();
  
  ngOnInit(): void {
    this.inputUser.type = '';
    this.inputUser.authorities = null;
  }

  
}

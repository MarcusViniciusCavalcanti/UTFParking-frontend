import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../core/data/user';
import { UserService } from '../../../core/service/user/user.service';
import { AvatarService } from '../../../core/service/avatar/avatar.service';
import { TypeUser } from '../../../core/data/type-user';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  user: User;
  avatarUser;
  constructor(private router: ActivatedRoute,
              private userService: UserService,
              private avatarService: AvatarService) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(user => {
        this.user = user;
        this.avatarService.getAvatar(user).subscribe(image => this.createImageFromBlob(image))
      });
  }
  
  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => this.avatarUser = reader.result, false);
    
    if (image) {
      reader.readAsDataURL(image);
    }
  }
  
  tranlaterType(user: User): string {
    if (user) {
      return TypeUser.translanter(user.type);
    }
    return '';
  }
}

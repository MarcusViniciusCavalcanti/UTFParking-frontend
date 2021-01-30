import { Component, OnInit } from '@angular/core';
import { User } from '../../core/data/user';
import { AuthService } from '../../core/service/auth/auth.service';
import { AvatarService } from '../../core/service/avatar/avatar.service';
import { UserService } from '../../core/service/user/user.service';
import { navItems, NavItemsService } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  
  public navItems;
  
  user: User;
  avatarUser;

  constructor(private avatarService: AvatarService,
              private userService: UserService,
              private authService: AuthService) {
  
    const navItemsService = new NavItemsService();
  
    this.user = userService.currentUserValue;
    this.navItems = navItemsService.getItems(this.user.roles);
    
  }
  
  ngOnInit(): void {
    this.avatarService.getAvatar(this.user).subscribe(image => this.createImageFromBlob(image));
  }
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  
  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => this.avatarUser = reader.result, false);
    
    if (image) {
      reader.readAsDataURL(image);
    }
  }
}

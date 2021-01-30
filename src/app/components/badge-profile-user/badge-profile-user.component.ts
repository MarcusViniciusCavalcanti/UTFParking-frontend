import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Role } from '../../core/data/user';

@Component({
  selector: 'app-badge-profile-user',
  templateUrl: './badge-profile-user.component.html',
  styleUrls: ['./badge-profile-user.component.scss']
})
export class BadgeProfileUserComponent implements OnInit, OnChanges {

  @Input() roles: Role[];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }

}

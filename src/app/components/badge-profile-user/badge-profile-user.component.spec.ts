import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeProfileUserComponent } from './badge-profile-user.component';

describe('BadgeProfileUserComponent', () => {
  let component: BadgeProfileUserComponent;
  let fixture: ComponentFixture<BadgeProfileUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeProfileUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeProfileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

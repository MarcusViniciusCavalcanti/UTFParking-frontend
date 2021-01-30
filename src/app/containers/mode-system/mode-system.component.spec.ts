import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSystemComponent } from './mode-system.component';

describe('ModeSystemComponent', () => {
  let component: ModeSystemComponent;
  let fixture: ComponentFixture<ModeSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

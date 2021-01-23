import { fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

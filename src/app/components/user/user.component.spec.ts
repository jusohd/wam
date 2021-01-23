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
  /*
  it('Init: should create an array with form inputs', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    tick(500)

    expect(component.inputs.length).toBeGreaterThan(0);
  }));

  it('should emit an event when click next button', fakeAsync(() => {
    spyOn(component, 'submitForm');

    component.userForm = fb.group({
      name: new FormControl(''),
      lastname: new FormControl(''),
    });
    const button = fixture.debugElement.query(By.css('#btnNext')).nativeElement;
    button.click();

    fixture.whenStable().then(() => {
      expect(component.submitForm).toHaveBeenCalled();
    })
  }));
  */
});

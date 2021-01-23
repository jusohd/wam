import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule],
      providers: [HttpClient, FormBuilder]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Init: Should create an user form', fakeAsync(() => {
    component.ngOnInit();
    tick(500)
    expect(component.userForm).not.toBeNull();
  }));

  it('should have an stepper', () => {
    const element = fixture.debugElement.query(By.css('#stepper')).nativeElement;
    expect(element).not.toBeNull();
  });
  
  it('payData should be not null', () => {
    component.ngOnInit();
    fixture.detectChanges();
        
    component.paying();
    expect(component.payData).not.toBeNull();
  });
  
});
